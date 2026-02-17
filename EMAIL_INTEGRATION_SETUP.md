# Email Integration Setup Guide

## Overview
All website forms now send email notifications to `info@mubraizresourcesltd.com` when users submit data.

## Forms Integrated
1. **Contact Us** (`/contact`)
2. **Global Trade Intelligence** (`/services/global-trade`)
3. **Fleet Asset Inquiry** (`/fleet`)
4. **Fleet Deployment Request** (`/services/fleet`)
5. **Haulage Quote Request** (`/services/haulage/quote`)
6. **Warehousing Site Visit** (`/services/warehousing/site-visit`)

## Backend Setup

### 1. Install Dependencies
The backend now includes `nodemailer` for email sending:
```bash
cd Web/backend
npm install
```

### 2. Configure cPanel SMTP Settings

#### Get Your SMTP Settings from cPanel:
1. **Log into cPanel**
2. Go to **Email Accounts**
3. Find `info@mubraizresourcesltd.com` (create if it doesn't exist)
4. Click **Configure Email Client**
5. Note the **Mail Server** and **SMTP Port**

#### Update `.env` File:
```env
# Email Configuration (cPanel SMTP)
SMTP_HOST=mail.mubraizresourcesltd.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@mubraizresourcesltd.com
SMTP_PASSWORD=your-email-password
```

#### Common cPanel Settings:
- **SMTP Host**: `mail.yourdomain.com` or `mail.mubraizresourcesltd.com`
- **Port 465** with `SMTP_SECURE=true` (SSL) - **Recommended**
- **Port 587** with `SMTP_SECURE=false` (TLS/STARTTLS) - Alternative
- **Username**: Full email address (`info@mubraizresourcesltd.com`)
- **Password**: Your cPanel email password

#### Find Your Mail Server:
Your SMTP_HOST is typically:
- `mail.mubraizresourcesltd.com` (most common)
- `mubraizresourcesltd.com`
- Check cPanel → Email Accounts → Configure Email Client

### 3. Deploy Backend
Upload the `backend-deployment-email.tar.gz` to your server and extract:
```bash
tar -xzf backend-deployment-email.tar.gz
npm install
```

### 4. Update Environment Variables
On your server, create/update `.env` with:
- Database credentials
- Clerk authentication keys
- **SMTP credentials** (new)

## API Endpoints

All endpoints are under `/api/contact/`:

| Endpoint | Form | Required Fields |
|----------|------|----------------|
| `/submit` | Contact Us | `fullName`, `email`, `message` |
| `/trade-audit` | Global Trade Intelligence | `sector`, `destination` |
| `/asset-inquiry` | Fleet Asset Inquiry | `assetName`, `company`, `location`, `summary` |
| `/fleet-deployment` | Fleet Deployment | `asset`, `location` |
| `/quote` | Haulage Quote | `name`, `email` |
| `/site-visit` | Site Visit | `name`, `email` |

## Email Templates

Each form has a custom HTML email template with:
- **Branded header** with Mubraiz green (#a1dc84)
- **Formatted data** in easy-to-read sections
- **Timestamp** in Nigeria timezone (Africa/Lagos)
- **Responsive design** for mobile email clients

## Testing

### Local Testing
1. Start the backend: `npm run dev`
2. Fill out any form on the frontend
3. Check backend console for email sending logs
4. Check `info@mubraizresourcesltd.com` inbox

### Production Testing
1. Deploy both frontend and backend
2. Submit a test form
3. Verify email delivery
4. Check spam folder if not received

## Troubleshooting

### Emails Not Sending

#### 1. Check SMTP Settings
- **Verify credentials** in cPanel → Email Accounts
- **Use full email address** as SMTP_USER: `info@mubraizresourcesltd.com`
- **Check mail server hostname** in cPanel → Configure Email Client
- **Try different ports**: 465 (SSL) or 587 (TLS)

#### 2. Port Configuration
```env
# Option 1: Port 465 with SSL (Recommended)
SMTP_PORT=465
SMTP_SECURE=true

# Option 2: Port 587 with TLS
SMTP_PORT=587
SMTP_SECURE=false
```

#### 3. Check Backend Logs
Look for these error messages:
- **"Invalid login"**: Wrong email password
- **"Connection timeout"**: Wrong SMTP_HOST or port blocked
- **"Self-signed certificate"**: SSL/TLS issue

### Emails Going to Spam

#### Fix Email Deliverability in cPanel:
1. Go to **cPanel → Email Deliverability**
2. Check for warnings next to your domain
3. Click **Manage** → **Install the suggested record**
4. This sets up SPF and DKIM automatically

#### Manual SPF Record (if needed):
1. **cPanel → Zone Editor**
2. Add TXT record:
   ```
   v=spf1 a mx ip4:YOUR_SERVER_IP ~all
   ```

### Backend Connection Errors

#### "ECONNREFUSED" or "Connection timeout"
- **Check SMTP_HOST**: Should be `mail.yourdomain.com`
- **Try port 465** instead of 587
- **Verify firewall** allows outbound SMTP
- **Contact hosting support** if issue persists

#### "Invalid login" or "Authentication failed"
- **Reset email password** in cPanel → Email Accounts
- **Use full email**: `info@mubraizresourcesltd.com` (not just "info")
- **Check for typos** in `.env` file

#### "Self-signed certificate" error
Add to `utils/emailService.js` in the transporter config:
```javascript
tls: {
    rejectUnauthorized: false
}
```

## Files Modified

### Backend
- ✅ `utils/emailService.js` (NEW) - Email sending logic
- ✅ `routes/contactRoutes.js` - Added 5 new endpoints
- ✅ `.env.example` - Added SMTP configuration
- ✅ `package.json` - Added nodemailer dependency

### Frontend
- ✅ `src/app/contact/page.tsx` - Already working
- ✅ `src/app/services/global-trade/TradeContent.tsx`
- ✅ `src/app/fleet/FleetShowcaseContent.tsx`
- ✅ `src/app/services/fleet/page.tsx`
- ✅ `src/app/services/haulage/quote/page.tsx`
- ✅ `src/app/services/warehousing/site-visit/page.tsx`

## Next Steps

1. **Configure SMTP credentials** in production `.env`
2. **Test each form** to verify email delivery
3. **Monitor email logs** for the first few days
4. **Set up email forwarding** if needed
5. **Consider email backup** (BCC to another address)

## Support

If you encounter issues:
1. Check backend console logs
2. Verify SMTP settings with your email provider
3. Test with a different SMTP provider (Gmail, SendGrid, etc.)
4. Ensure firewall allows outbound SMTP connections
