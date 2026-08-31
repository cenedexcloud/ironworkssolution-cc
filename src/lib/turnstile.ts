/**
 * Server-side Cloudflare Turnstile verification.
 *
 * TURNSTILE_SECRET_KEY is server-only. The matching site key is public and
 * lives in NEXT_PUBLIC_TURNSTILE_SITE_KEY, read by the client widget.
 *
 * When no secret is configured the check is skipped rather than failing every
 * submission — an unconfigured environment should not silently reject leads.
 */

const SECRET = process.env.TURNSTILE_SECRET_KEY ?? '';
const VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

export function isTurnstileConfigured() {
  return SECRET.length > 0;
}

/** True when the token passes, or when no secret is configured. */
export async function verifyTurnstile(token: unknown, ip?: string | null) {
  if (!isTurnstileConfigured()) {
    console.warn('[turnstile] TURNSTILE_SECRET_KEY is not set — skipping check');
    return true;
  }

  if (typeof token !== 'string' || !token) return false;

  const body = new URLSearchParams({ secret: SECRET, response: token });
  if (ip) body.set('remoteip', ip);

  try {
    const res = await fetch(VERIFY_URL, { method: 'POST', body });
    const data = (await res.json()) as {
      success?: boolean;
      'error-codes'?: string[];
    };
    if (!data.success) {
      console.error('[turnstile] verification failed:', data['error-codes']);
    }
    return Boolean(data.success);
  } catch (err) {
    console.error('[turnstile] verification error:', (err as Error).message);
    return false;
  }
}

/** The submitter's IP, for the optional remoteip field. */
export function clientIp(request: Request) {
  return request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ?? null;
}
