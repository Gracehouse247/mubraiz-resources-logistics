# 📋 Email Integration Deployment Checklist

## ✅ Pre-Deployment (Complete)
- [x] Installed nodemailer in backend
- [x] Created email service utility
- [x] Added 10 API endpoints for forms
- [x] Updated all 10 frontend forms
- [x] Built frontend application
- [x] Created deployment packages

## 🚀 Deployment Steps

### 1. cPanel Email Setup
- [ ] Log into cPanel
- [ ] Go to **Email Accounts**
- [ ] Verify `info@mubraizresourcesltd.com` exists (create if not)
- [ ] Set a strong password for the email
- [ ] Click **Configure Email Client** and note:
  - Mail Server: `mail.mubraizresourcesltd.com`
  - SMTP Port: `465` (SSL) or `587` (TLS)

### 2. Backend Deployment
- [ ] Upload `backend-production-ready.tar.gz` to server
- [ ] Extract: `tar -xzf backend-production-ready.tar.gz`
- [ ] Run: `npm install`
- [ ] Update `.env` file with SMTP settings:
  ```env
  SMTP_HOST=mail.mubraizresourcesltd.com
  SMTP_PORT=465
  SMTP_SECURE=true
  SMTP_USER=info@mubraizresourcesltd.com
  SMTP_PASSWORD=your-email-password
  ```
- [ ] Restart Node.js application

### 3. Frontend Deployment
- [ ] Upload `frontend_app/` folder to server
- [ ] Ensure `.env.local` has correct `NEXT_PUBLIC_API_URL`
- [ ] Restart Node.js application

### 4. Email Deliverability (Important!)
- [ ] Go to **cPanel → Email Deliverability**
- [ ] Check for warnings next to your domain
- [ ] Click **Manage** → **Install the suggested record**
- [ ] This automatically sets up SPF and DKIM

### 5. Testing
- [ ] Test **Contact Us** form (`/contact`)
- [ ] Test **Global Trade Intelligence** (`/services/global-trade`)
- [ ] Test **Fleet Asset Inquiry** (`/fleet`)
- [ ] Test **Fleet Deployment** (`/services/fleet`)
- [ ] Test **Haulage Quote** (`/services/haulage/quote`)
- [ ] Test **Site Visit Request** (`/services/warehousing/site-visit`)
- [ ] Test **Haulage Corridor Audit** (`/services/haulage`)
- [ ] Test **Warehousing Facility Brief** (`/services/warehousing`)
- [ ] Test **Procurement Sourcing Brief** (`/services/procurement`)
- [ ] Test **Customs Compliance Check** (`/services/customs`)
- [ ] Check `info@mubraizresourcesltd.com` inbox for all 10 emails
- [ ] Check spam folder if emails not in inbox

### 6. Verification
- [ ] Check backend logs for "✅ Email sent successfully"
- [ ] Verify email formatting looks good
- [ ] Test from different devices/browsers
- [ ] Confirm all form data appears in emails

## 🔧 If Emails Don't Send

### Quick Fixes:
1. **Check backend console** for error messages
2. **Try port 465** with `SMTP_SECURE=true`
3. **Verify email password** in cPanel
4. **Use full email address**: `info@mubraizresourcesltd.com`
5. **Check Email Deliverability** in cPanel

### Common Issues:
- **"Invalid login"** → Reset email password in cPanel
- **"Connection timeout"** → Try different port (465 or 587)
- **"Self-signed certificate"** → See CPANEL_SMTP_SETUP.md

## 📧 All Emails Go To:
**info@mubraizresourcesltd.com**

## 📚 Documentation Files:
- `CPANEL_SMTP_SETUP.md` - Detailed cPanel setup guide
- `SMTP_SETUP.md` - Quick reference
- `EMAIL_INTEGRATION_SETUP.md` - Complete integration guide

## ✨ What's Working:
All 10 forms now send formatted HTML emails to `info@mubraizresourcesltd.com` with:
- ✅ Branded email templates (Mubraiz green)
- ✅ All form data included
- ✅ Nigeria timezone timestamps
- ✅ Mobile-responsive design
- ✅ Professional formatting

## 🎯 Success Criteria:
- [ ] All 10 forms submit successfully
- [ ] Emails arrive at `info@mubraizresourcesltd.com`
- [ ] Emails are not in spam folder
- [ ] Email formatting looks professional
- [ ] All form data is captured correctly
