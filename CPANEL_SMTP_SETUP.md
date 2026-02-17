# cPanel SMTP Configuration Guide

## Overview
Your website uses **cPanel email hosting** to send all form submissions to `info@mubraizresourcesltd.com`.

## Step 1: Create Email Account in cPanel

1. **Log into cPanel**
2. Go to **Email Accounts**
3. Click **Create** (if `info@mubraizresourcesltd.com` doesn't exist)
4. Set a strong password
5. Click **Create Account**

## Step 2: Get SMTP Settings from cPanel

1. In **Email Accounts**, find `info@mubraizresourcesltd.com`
2. Click **Configure Email Client**
3. Note down these settings:

### Common cPanel SMTP Settings:
```
Incoming Server: mail.yourdomain.com
Outgoing Server (SMTP): mail.yourdomain.com
SMTP Port: 465 (SSL) or 587 (TLS)
Username: info@mubraizresourcesltd.com
Password: [Your email password]
```

## Step 3: Configure Backend `.env`

Add these settings to your backend `.env` file:

```env
# Email Configuration (cPanel SMTP)
SMTP_HOST=mail.mubraizresourcesltd.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@mubraizresourcesltd.com
SMTP_PASSWORD=your-email-password-here
```

### Port Options:
- **Port 465** with `SMTP_SECURE=true` (SSL) - **Recommended**
- **Port 587** with `SMTP_SECURE=false` (TLS/STARTTLS)
- **Port 25** (Usually blocked by hosting providers)

## Step 4: Find Your Mail Server Hostname

Your SMTP_HOST is typically one of these:
- `mail.mubraizresourcesltd.com` (most common)
- `mubraizresourcesltd.com`
- Your server's hostname (found in cPanel under "Server Information")

### How to Find It:
1. **cPanel → Email Accounts**
2. Click **Configure Email Client** next to your email
3. Look for "Mail Server" or "Outgoing Server"
4. Copy the hostname

## Step 5: Test Email Sending

```bash
# Start your backend
cd Web/backend
npm run dev

# Submit a form on your website
# Check backend console for:
# ✅ Email sent successfully: <message-id>

# Check inbox: info@mubraizresourcesltd.com
```

## Common cPanel SMTP Issues

### Issue: "Invalid login"
**Solution:**
- Verify email password in cPanel → Email Accounts
- Make sure you're using the **full email address** as SMTP_USER
- Reset the email password if needed

### Issue: "Connection timeout"
**Solution:**
- Try port **465** with `SMTP_SECURE=true`
- Or port **587** with `SMTP_SECURE=false`
- Check if your server firewall allows outbound SMTP

### Issue: "Self-signed certificate error"
**Solution:**
- Use port **465** with `SMTP_SECURE=true`
- Or add to `emailService.js`:
  ```javascript
  tls: {
      rejectUnauthorized: false
  }
  ```

### Issue: Emails going to spam
**Solution:**
- Set up **SPF record** in cPanel → Zone Editor
- Enable **DKIM** in cPanel → Email Deliverability
- Use **authenticated sender** (info@mubraizresourcesltd.com)

## Example `.env` Configuration

```env
# Database
DB_NAME=mubraizr_logistics
DB_USER=mubraizr_admin
DB_PASSWORD=YourDatabasePassword123
DB_HOST=localhost

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=pk_live_xxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_live_xxxxxxxxxxxxx

# cPanel Email (SMTP)
SMTP_HOST=mail.mubraizresourcesltd.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@mubraizresourcesltd.com
SMTP_PASSWORD=YourEmailPassword123
```

## Email Deliverability Check

After setup, verify email deliverability:

1. **cPanel → Email Deliverability**
2. Check for any warnings or errors
3. Fix any issues (usually SPF/DKIM records)
4. Click **Manage** → **Install the suggested record**

## All Forms Send Emails To:
📧 **info@mubraizresourcesltd.com**

## Forms Integrated:
1. ✅ Contact Us
2. ✅ Global Trade Intelligence
3. ✅ Fleet Asset Inquiry
4. ✅ Fleet Deployment Request
5. ✅ Haulage Quote Request
6. ✅ Warehousing Site Visit Request

## Quick Test

1. Go to your website
2. Fill out the Contact form
3. Submit
4. Check `info@mubraizresourcesltd.com` inbox
5. Look for email with subject: "New Contact Form Submission"

## Need Help?

If emails aren't sending:
1. Check backend console logs for errors
2. Verify SMTP settings in cPanel
3. Test with cPanel's webmail first
4. Contact your hosting provider for SMTP details
