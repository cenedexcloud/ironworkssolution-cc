/**
 * Client for the mini-mailer service.
 *
 * Configured with two env vars, both server-only:
 *   MAILER_URL      base URL, e.g. https://mailer.example.com  (no trailing /send)
 *   MAILER_API_KEY  bearer token
 *
 * Never expose either through a NEXT_PUBLIC_ prefix and never import this
 * module from a client component. When either is missing, isMailerConfigured()
 * is false and callers should degrade gracefully rather than 500 the visitor.
 */

export type SendMailInput = {
  /** recipient email — always sent */
  to: string;
  /** subject line — always sent */
  subject: string;
  /** sender display name; defaults to the company name */
  fromName?: string;
  /** HTML body. At least one of html/text is required. */
  html?: string;
  /** plain-text body. At least one of html/text is required. */
  text?: string;
  /** e.g. the customer's email on contact-form notifications */
  replyTo?: string;
  /** override sender address; only sent when set */
  from?: string;
};

const DEFAULT_FROM_NAME = 'Iron Works Solution';

/** Everyone who receives lead notifications from the site forms. */
export const LEAD_RECIPIENTS = ['ray@wyesman.com'];

/** Optional sender-address override, configured per environment. */
export const FROM_ADDRESS = process.env.FROM_EMAIL || undefined;

/**
 * The mailer emits the Subject header verbatim, so any non-ASCII byte (an em
 * dash, an emoji, an accented name) is read as Latin-1 by the receiving client
 * and shows up as mojibake. Encode those subjects per RFC 2047 instead;
 * pure-ASCII subjects are left alone so they stay human-readable in raw headers.
 */
function encodeSubject(subject: string) {
  if (!/[^\x20-\x7E]/.test(subject)) return subject;
  return `=?UTF-8?B?${Buffer.from(subject, 'utf8').toString('base64')}?=`;
}

/** Values land inside an HTML email, so escape them. */
export function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function isMailerConfigured() {
  return Boolean(process.env.MAILER_URL && process.env.MAILER_API_KEY);
}

/** Sends one message. Resolves to the mailer's messageId, throws on failure. */
export async function sendMail(opts: SendMailInput): Promise<string | undefined> {
  const mailerUrl = process.env.MAILER_URL;
  const mailerApiKey = process.env.MAILER_API_KEY;

  if (!mailerUrl || !mailerApiKey) {
    throw new Error('Mailer is not configured');
  }

  if (!opts.html && !opts.text) {
    throw new Error('sendMail requires html or text');
  }

  const payload: Record<string, string> = {
    to: opts.to,
    subject: encodeSubject(opts.subject),
    fromName: opts.fromName ?? DEFAULT_FROM_NAME,
  };
  if (opts.html) payload.html = opts.html;
  if (opts.text) payload.text = opts.text;
  if (opts.replyTo) payload.replyTo = opts.replyTo;
  if (opts.from) payload.from = opts.from;

  const res = await fetch(`${mailerUrl.replace(/\/+$/, '')}/send`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${mailerApiKey}`,
    },
    body: JSON.stringify(payload),
    signal: AbortSignal.timeout(15_000),
  });

  const json = (await res.json().catch(() => ({}))) as {
    ok?: boolean;
    error?: string;
    messageId?: string;
  };

  if (!res.ok || json.ok === false) {
    throw new Error(json.error || `Mailer returned HTTP ${res.status}`);
  }

  return json.messageId;
}

/**
 * Sends the internal lead notification to every LEAD_RECIPIENTS address.
 * Resolves with a messageId when at least one send succeeded; throws only when
 * every recipient failed. Partial failures are logged, not surfaced — losing a
 * copy of the email beats losing the lead.
 */
export async function sendLeadNotification(
  tag: string,
  opts: Omit<SendMailInput, 'to'>,
): Promise<string | undefined> {
  const results = await Promise.allSettled(
    LEAD_RECIPIENTS.map((to) => sendMail({ ...opts, to })),
  );

  const failures = results.filter((r) => r.status === 'rejected') as PromiseRejectedResult[];

  if (failures.length === LEAD_RECIPIENTS.length) {
    console.error(`[${tag}] all sends failed:`, (failures[0].reason as Error)?.message);
    throw failures[0].reason;
  }

  if (failures.length > 0) {
    console.error(`[${tag}] partial send failure:`, (failures[0].reason as Error)?.message);
  }

  const first = results.find((r) => r.status === 'fulfilled') as
    | PromiseFulfilledResult<string | undefined>
    | undefined;
  return first?.value;
}
