# 📋 DEPLOYMENT CHECKLIST - Mubraiz Resources Platform

## ✅ PRE-DEPLOYMENT VERIFICATION

### Build Status
- [x] Frontend production build successful
- [x] Backend dependencies verified
- [x] Database schema updated with all tables
- [x] Environment variables configured
- [x] Clerk authentication keys verified

---

## 📦 FRONTEND DEPLOYMENT TO `public_html`

### Files to Upload (Complete Project)
```
✅ .next/                    (Production build - 100% REQUIRED)
✅ public/                   (Static assets - images, SVGs, fonts)
✅ src/                      (Source code - REQUIRED for Node.js)
✅ package.json              (Dependencies manifest)
✅ package-lock.json         (Lock file)
✅ next.config.ts            (Next.js configuration)
✅ tsconfig.json             (TypeScript config)
✅ postcss.config.mjs        (PostCSS config)
✅ .env.local                (Environment variables - CRITICAL!)
✅ middleware.ts             (Authentication middleware)
```

### Files to EXCLUDE
```
❌ node_modules/            (Install on server via cPanel)
❌ .git/                    (Version control - not needed)
❌ .agents/                 (Development only)
❌ .agent/                  (Development only)
❌ out/                     (Not used for Node.js deployment)
❌ README.md                (Documentation only)
❌ .gitignore               (Not needed on server)
```

### Environment Variables (.env.local)
```env
NEXT_PUBLIC_API_URL=https://api.mubraizresourcesltd.com
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_d2lzZS15YWstMjguY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_rIk137zYjlsxcvK1b3DrNk2hGRJQC10UaiRazoqvce
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/register
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/portal/admin/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/portal/admin/dashboard
```

### cPanel Node.js App Configuration
- **Application root**: `public_html`
- **Application URL**: `mubraizresourcesltd.com`
- **Node.js version**: 20.20.0
- **Application mode**: Production
- **Action**: Run NPM Install → Start App

---

## 📦 BACKEND DEPLOYMENT TO `api.mubraizresourcesltd.com`

### Files to Upload
```
✅ config/                   (Database & Socket configuration)
   ├── db.js
   └── socket.js

✅ middleware/               (Authentication & validation)
   ├── auth.js
   └── validateRequest.js

✅ models/                   (ALL 14 Sequelize models)
   ├── Alert.js
   ├── Asset.js
   ├── ContactSubmission.js
   ├── Driver.js
   ├── Geofence.js
   ├── GPSLog.js
   ├── Invoice.js
   ├── Message.js
   ├── Post.js
   ├── ProcurementRequest.js
   ├── Shipment.js
   ├── SupportTicket.js
   ├── Vehicle.js
   └── Vendor.js

✅ routes/                   (ALL 11 API route handlers)
   ├── adminRoutes.js
   ├── assetRoutes.js
   ├── clientRoutes.js
   ├── contactRoutes.js
   ├── fleetRoutes.js
   ├── messageRoutes.js
   ├── postRoutes.js
   ├── procurementRoutes.js
   ├── ticketRoutes.js
   ├── trackingRoutes.js
   └── vendorRoutes.js

✅ scripts/                  (Utility scripts)
✅ uploads/                  (File upload directory - ensure 755 permissions)
✅ package.json              (Dependencies manifest)
✅ package-lock.json         (Lock file)
✅ server.js                 (Main entry point)
✅ .env                      (Environment variables - CRITICAL!)
```

### Files to EXCLUDE
```
❌ node_modules/            (Install on server via cPanel)
❌ .env.example             (Template only)
❌ deploy-backend.zip       (Old deployment file)
❌ simulator/               (Development only)
```

### Environment Variables (.env)
```env
NODE_ENV=production
PORT=5000

# Database (from cPanel screenshot)
DB_NAME=mubraizr_logistics
DB_USER=mubraizr_admin
DB_PASSWORD=mTHrEJTYE+ojot
DB_HOST=localhost

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=pk_test_d2lzZS15YWstMjguY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_rIk137zYjlsxcvK1b3DrNk2hGRJQC10UaiRazoqvce
```

### cPanel Node.js App Configuration
- **Application root**: `api.mubraizresourcesltd.com`
- **Application URL**: `api.mubraizresourcesltd.com`
- **Application startup file**: `server.js`
- **Node.js version**: 20.20.0
- **Application mode**: Production
- **Action**: Run NPM Install → Restart App

---

## 📦 DATABASE DEPLOYMENT

### Import Schema File
- **File**: `mubraiz_logistics_schema.sql` (in project root)
- **Database**: `mubraizr_logistics`
- **Method**: phpMyAdmin → Import

### Tables to Verify (15 Total)
```
✅ 1.  Drivers
✅ 2.  Vehicles
✅ 3.  Shipments
✅ 4.  Invoices
✅ 5.  ProcurementRequests
✅ 6.  AuditLogs
✅ 7.  Vendors
✅ 8.  Assets
✅ 9.  Messages
✅ 10. Posts
✅ 11. SupportTickets
✅ 12. GPSLogs
✅ 13. Geofences
✅ 14. Alerts
✅ 15. ContactSubmissions
```

---

## 🧪 POST-DEPLOYMENT TESTING

### Critical Tests
- [ ] Homepage: https://mubraizresourcesltd.com
- [ ] API Health: https://api.mubraizresourcesltd.com/
- [ ] Login: https://mubraizresourcesltd.com/auth/login
- [ ] Register: https://mubraizresourcesltd.com/auth/register
- [ ] Admin Dashboard: https://mubraizresourcesltd.com/portal/admin/dashboard
- [ ] Fleet Control: https://mubraizresourcesltd.com/portal/admin/fleet
- [ ] Tracking: https://mubraizresourcesltd.com/portal/client/tracking
- [ ] Contact Form: https://mubraizresourcesltd.com/contact

### API Endpoints
- [ ] GET /api/fleet/vehicles
- [ ] GET /api/shipments
- [ ] GET /api/admin/overview
- [ ] POST /api/contact

### Database
- [ ] All 15 tables exist
- [ ] Foreign keys working
- [ ] Can insert test data

---

## 🚨 CRITICAL REMINDERS

1. **This is NOT a static site** - Requires Node.js runtime
2. **Run NPM Install** on both frontend and backend after upload
3. **Backup database** before importing new schema
4. **Verify .env files** are uploaded and configured correctly
5. **Check file permissions** on uploads/ directory (755)
6. **Test authentication** immediately after deployment

---

## 📞 SUPPORT

If deployment fails:
1. Check Node.js app logs in cPanel
2. Verify environment variables
3. Test database connection in phpMyAdmin
4. Ensure both apps show "Running" status in cPanel

**Status**: ✅ Ready for Production Deployment
**Last Updated**: February 11, 2026
