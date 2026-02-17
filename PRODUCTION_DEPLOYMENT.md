# 🚀 Production Deployment Guide

## ✅ READY TO DEPLOY

Your backend is **production-ready** with SMTP credentials configured!

---

## 📦 Deployment Package

**File:** `backend-production-ready.tar.gz`

This package includes:
- ✅ All backend code
- ✅ Email integration with nodemailer
- ✅ **Configured `.env` file** with your SMTP credentials
- ✅ 10 API endpoints for form submissions
- ✅ All dependencies listed in `package.json`

---

## 🚀 Deployment Steps

### 1. Upload to Server
```bash
# Upload backend-production-ready.tar.gz to your server
# Example location: /home/username/backend/
```

### 2. Extract Files
```bash
cd /home/username/backend/
tar -xzf backend-production-ready.tar.gz
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Start Application
```bash
# Development mode
npm run dev

# Production mode (recommended)
npm start
```

### 5. Configure cPanel Node.js App
1. **cPanel → Setup Node.js App**
2. Click **Create Application**
3. Set:
   - **Node.js version**: 18.x or higher
   - **Application mode**: Production
   - **Application root**: `/home/username/backend`
   - **Application startup file**: `server.js`
   - **Environment variables**: Already in `.env` file
4. Click **Create**
5. Click **Start App**

---

## 📧 Email Configuration (Already Set!)

Your `.env` file already contains:
```env
SMTP_HOST=mail.mubraizresourcesltd.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@mubraizresourcesltd.com
SMTP_PASSWORD=JLH@O;95NMYU?4%J
```

**All emails will be sent to:** `info@mubraizresourcesltd.com`

---

## ✅ Email Deliverability Setup

**Important:** Prevent emails from going to spam!

1. **cPanel → Email Deliverability**
2. Find your domain: `mubraizresourcesltd.com`
3. Click **Manage**
4. Click **Install the suggested record**
5. This sets up SPF and DKIM automatically

---

## 🧪 Testing

### Test Backend API
```bash
# Check if server is running
curl http://localhost:5000/

# Should return:
# {"message":"Mubraiz Resources API is operational","status":"Live"}
```

### Test Email Sending
1. Go to your website
2. Fill out the **Contact Us** form
3. Submit
4. Check backend logs for: `✅ Email sent successfully`
5. Check inbox: `info@mubraizresourcesltd.com`

### Test All 10 Forms
- [ ] **Contact Us** (`/contact`)
- [ ] **Global Trade Intelligence** (`/services/global-trade`)
- [ ] **Fleet Asset Inquiry** (`/fleet`)
- [ ] **Fleet Deployment** (`/services/fleet`)
- [ ] **Haulage Quote** (`/services/haulage/quote`)
- [ ] **Site Visit Request** (`/services/warehousing/site-visit`)
- [ ] **Haulage Corridor Audit** (`/services/haulage`)
- [ ] **Warehousing Facility Brief** (`/services/warehousing`)
- [ ] **Procurement Sourcing Brief** (`/services/procurement`)
- [ ] **Customs Compliance Check** (`/services/customs`)

---

## 🔍 Verify Email Integration

### Check Backend Logs
```bash
# View logs
pm2 logs

# Or if using npm
npm run dev
```

Look for:
```
✅ Email sent successfully: <message-id>
```

### Check Email Inbox
- **Inbox:** info@mubraizresourcesltd.com
- **Check spam folder** if not in inbox
- **Verify email formatting** looks professional

---

## 🛠️ Troubleshooting

### Emails Not Sending?

**1. Check Backend Logs**
```bash
pm2 logs
# or
npm run dev
```

**2. Common Errors:**

**"Invalid login"**
- Email password might be wrong
- Try resetting in cPanel → Email Accounts

**"Connection timeout"**
- Port 465 might be blocked
- Try port 587 with `SMTP_SECURE=false`

**"ECONNREFUSED"**
- Check SMTP_HOST: `mail.mubraizresourcesltd.com`
- Verify email account exists in cPanel

### Emails Going to Spam?

1. **cPanel → Email Deliverability**
2. Install SPF/DKIM records
3. Check sender reputation
4. Verify "From" address is `info@mubraizresourcesltd.com`

---

## 📊 API Endpoints

All endpoints send emails to `info@mubraizresourcesltd.com`:

| Endpoint | Form | Method |
|----------|------|--------|
| `/api/contact/submit` | Contact Us | POST |
| `/api/contact/trade-audit` | Global Trade Intelligence | POST |
| `/api/contact/asset-inquiry` | Fleet Asset Inquiry | POST |
| `/api/contact/fleet-deployment` | Fleet Deployment | POST |
| `/api/contact/quote` | Haulage Quote | POST |
| `/api/contact/site-visit` | Site Visit Request | POST |
| `/api/contact/haulage-audit` | Haulage Corridor Audit | POST |
| `/api/contact/warehousing-brief` | Warehousing Facility Brief | POST |
| `/api/procurement/request` | Procurement Sourcing Brief | POST |
| `/api/contact/customs-assessment` | Customs Compliance Check | POST |

---

## 🎯 Success Checklist

- [ ] Backend uploaded and extracted
- [ ] `npm install` completed
- [ ] Node.js app running in cPanel
- [ ] Email Deliverability configured (SPF/DKIM)
- [ ] All 10 forms tested
- [ ] Emails arriving in inbox (not spam)
- [ ] Email formatting looks professional
- [ ] Backend logs show successful sends

---

## 📞 Support

**If you encounter issues:**

1. Check backend console logs
2. Verify SMTP settings in `.env`
3. Test email account in cPanel webmail
4. Check Email Deliverability in cPanel
5. Try different SMTP port (465 or 587)

---

## 🎉 You're Ready!

Your backend is **production-ready** with:
- ✅ Email integration configured
- ✅ SMTP credentials set
- ✅ All 10 forms connected
- ✅ Professional email templates

**Just deploy and test!** 🚀
