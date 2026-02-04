# Deployment Guide

## Environment Variables Setup

This application requires the following environment variables to work in production:

### Required Variables:
- `RESEND_API_KEY` - Your Resend API key for sending emails
- `FROM_EMAIL` - The email address to send emails from
- `CONTACT_EMAIL` - The email address to receive form submissions

### How to Set Up in Netlify:

1. Go to [Netlify Dashboard](https://app.netlify.com)
2. Select your site
3. Navigate to: **Site configuration** → **Environment variables**
4. Click **"Add a variable"**
5. Add each variable from your `.env.local` file
6. Click **"Save"**
7. Trigger a new deploy: **Deploys** → **Trigger deploy** → **Deploy site**

### Important Security Notes:

⚠️ **NEVER commit `.env.local` or `.env` files to Git!**

These files contain sensitive API keys and should remain private. They are already listed in `.gitignore`.

## Deploy to Netlify

This site is configured to deploy to Netlify using the Next.js plugin.

### Automatic Deployments:
- Pushes to `main` branch will automatically deploy
- Pull requests will generate preview deployments

### Manual Deployment:
```bash
netlify deploy --prod
```

## Troubleshooting

### Forms not working in production?
1. Check that all environment variables are set in Netlify
2. Check the function logs: **Netlify Dashboard** → **Functions** → **quick-lead**
3. Look for error messages in the browser console (F12)

### Common Issues:
- **"Server configuration error"** → Missing `RESEND_API_KEY`
- **404 on API routes** → Redeploy the site
- **CORS errors** → Check Netlify configuration
