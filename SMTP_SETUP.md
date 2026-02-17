# ⚡ Quick cPanel SMTP Setup

## 1. Get Your Email Settings from cPanel

**cPanel → Email Accounts → Configure Email Client**

Copy these values:
```
Mail Server: mail.mubraizresourcesltd.com
SMTP Port: 465 (SSL) or 587 (TLS)
Username: info@mubraizresourcesltd.com
Password: [Your email password]
```

## 2. Add to Backend `.env`

```env
# cPanel Email Configuration
SMTP_HOST=mail.mubraizresourcesltd.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=info@mubraizresourcesltd.com
SMTP_PASSWORD=your-email-password
```

## 3. Deploy & Test

```bash
# Upload backend to server
# Restart Node.js app
# Submit any form on website
# Check: info@mubraizresourcesltd.com inbox
```

## ✅ All Forms Send To:
📧 **info@mubraizresourcesltd.com**

## 🔧 Troubleshooting

**Can't send emails?**
- Use port **465** with `SMTP_SECURE=true`
- Or port **587** with `SMTP_SECURE=false`
- Full email as username: `info@mubraizresourcesltd.com`
- Check cPanel → Email Deliverability

**Emails in spam?**
- cPanel → Email Deliverability
- Install SPF and DKIM records
