# 🚀 Mubraiz Resources Platform - cPanel Deployment Guide

## 📋 Pre-Deployment Checklist

### ✅ What's Been Verified
- ✅ Production build successful (Exit Code 0)
- ✅ All admin dashboards functional
- ✅ Clerk authentication integrated
- ✅ Database schema complete with all tables
- ✅ API endpoints configured
- ✅ WebSocket support enabled
- ✅ Middleware/Proxy configured

---

## 📦 PART 1: FRONTEND DEPLOYMENT (public_html)

### Step 1: Build the Frontend for Production

```powershell
cd "c:\Projects\Mubraiz Resources UI\Web\frontend"
npm run build
```

**Expected Output**: `.next` folder with production build

### Step 2: Files to Upload to `public_html`

Since this is a **Node.js application** (not static export), you need to upload the **ENTIRE frontend project** to `public_html`:

#### Upload These Files/Folders:
```
public_html/
├── .next/                    # Production build (REQUIRED)
├── public/                   # Static assets (images, fonts, etc.)
├── src/                      # Source code (REQUIRED for Node.js)
├── node_modules/             # Dependencies (or run npm install on server)
├── package.json              # Dependencies manifest
├── package-lock.json         # Lock file
├── next.config.ts            # Next.js configuration
├── tsconfig.json             # TypeScript config
├── postcss.config.mjs        # PostCSS config
├── .env.local                # Environment variables (IMPORTANT!)
└── middleware.ts             # Authentication middleware
```

#### DO NOT Upload:
- `.git/` folder
- `.agents/` folder
- `.agent/` folder
- `README.md`
- `.gitignore`
- `out/` folder (not used for Node.js deployment)

### Step 3: Configure Environment Variables in `public_html/.env.local`

Create or update `.env.local` with:

```env
# API Configuration
NEXT_PUBLIC_API_URL=https://api.mubraizresourcesltd.com

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_d2lzZS15YWstMjguY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_rIk137zYjlsxcvK1b3DrNk2hGRJQC10UaiRazoqvce

# Clerk Redirects
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/login
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/register
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/portal/admin/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/portal/admin/dashboard
```

### Step 4: Setup Node.js App in cPanel

1. **Login to cPanel** → **Setup Node.js App**
2. **Create Application**:
   - **Node.js version**: 20.20.0 (or latest available)
   - **Application mode**: Production
   - **Application root**: `public_html`
   - **Application URL**: `mubraizresourcesltd.com`
   - **Application startup file**: Leave as default or set to `server.js` if prompted
   - **Passenger log file**: Enable for debugging

3. **Run NPM Install**:
   - Click "Run NPM Install" button in cPanel Node.js interface
   - Wait for dependencies to install

4. **Start the Application**:
   - Click "Start App" or "Restart App"
   - Verify status shows "Running"

---

## 📦 PART 2: BACKEND DEPLOYMENT (api.mubraizresourcesltd.com)

### Step 1: Files to Upload to `api.mubraizresourcesltd.com`

Based on your screenshot, the backend is already deployed. To update it:

#### Upload These Files/Folders:
```
api.mubraizresourcesltd.com/
├── config/                   # Database & Socket config
│   ├── db.js
│   └── socket.js
├── middleware/               # Auth & validation middleware
│   ├── auth.js
│   └── validateRequest.js
├── models/                   # Sequelize models (ALL 14 files)
│   ├── Alert.js
│   ├── Asset.js
│   ├── ContactSubmission.js
│   ├── Driver.js
│   ├── Geofence.js
│   ├── GPSLog.js
│   ├── Invoice.js
│   ├── Message.js
│   ├── Post.js
│   ├── ProcurementRequest.js
│   ├── Shipment.js
│   ├── SupportTicket.js
│   ├── Vehicle.js
│   └── Vendor.js
├── routes/                   # API route handlers (ALL 11 files)
│   ├── adminRoutes.js
│   ├── assetRoutes.js
│   ├── clientRoutes.js
│   ├── contactRoutes.js
│   ├── fleetRoutes.js
│   ├── messageRoutes.js
│   ├── postRoutes.js
│   ├── procurementRoutes.js
│   ├── ticketRoutes.js
│   ├── trackingRoutes.js
│   └── vendorRoutes.js
├── scripts/                  # Utility scripts
├── uploads/                  # File upload directory (ensure writable)
├── node_modules/             # Dependencies (or run npm install)
├── package.json              # Dependencies manifest
├── package-lock.json         # Lock file
├── server.js                 # Main entry point
└── .env                      # Environment variables (CRITICAL!)
```

#### DO NOT Upload:
- `.env.example` (this is just a template)
- `deploy-backend.zip` (old deployment file)
- `simulator/` (development only)

### Step 2: Configure Backend Environment Variables

Update `.env` in `api.mubraizresourcesltd.com`:

```env
NODE_ENV=production
PORT=5000

# Database Credentials (from your cPanel screenshot)
DB_NAME=mubraizr_logistics
DB_USER=mubraizr_admin
DB_PASSWORD=mTHrEJTYE+ojot
DB_HOST=localhost

# Clerk Authentication (same as frontend)
CLERK_PUBLISHABLE_KEY=pk_test_d2lzZS15YWstMjguY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_rIk137zYjlsxcvK1b3DrNk2hGRJQC10UaiRazoqvce
```

### Step 3: Update Node.js App Configuration

According to your screenshot, the backend Node.js app is configured as:
- **Application root**: `api.mubraizresourcesltd.com`
- **Application URL**: `api.mubraizresourcesltd.com`
- **Application startup file**: `server.js`
- **Node.js version**: 20.20.0

**Actions**:
1. Click "Run NPM Install" to update dependencies
2. Click "Restart" to apply changes
3. Verify the app shows "Running" status

---

## 📦 PART 3: DATABASE SETUP

### Step 1: Import Updated Schema

1. **Login to cPanel** → **phpMyAdmin**
2. **Select Database**: `mubraizr_logistics`
3. **Click "Import" tab**
4. **Choose File**: Upload `mubraiz_logistics_schema.sql` from project root
5. **Click "Go"**

### Step 2: Verify Tables Created

The schema now includes **14 tables**:
1. ✅ Drivers
2. ✅ Vehicles
3. ✅ Shipments
4. ✅ Invoices
5. ✅ ProcurementRequests
6. ✅ AuditLogs
7. ✅ Vendors (NEW)
8. ✅ Assets (NEW)
9. ✅ Messages (NEW)
10. ✅ Posts (NEW)
11. ✅ SupportTickets (NEW)
12. ✅ GPSLogs (NEW)
13. ✅ Geofences (NEW)
14. ✅ Alerts (NEW)
15. ✅ ContactSubmissions (NEW)

**All missing tables have been added to the schema file!**

---

## 🧪 PART 4: POST-DEPLOYMENT TESTING

### Test Checklist

#### Frontend Tests:
- [ ] Homepage loads: `https://mubraizresourcesltd.com`
- [ ] Navigation works (Services, Resources, Fleet dropdowns)
- [ ] Login page: `https://mubraizresourcesltd.com/auth/login`
- [ ] Register page: `https://mubraizresourcesltd.com/auth/register`
- [ ] Admin Dashboard: `https://mubraizresourcesltd.com/portal/admin/dashboard`
- [ ] Fleet Control: `https://mubraizresourcesltd.com/portal/admin/fleet`
- [ ] Tracking Portal: `https://mubraizresourcesltd.com/portal/client/tracking`
- [ ] Contact Form: `https://mubraizresourcesltd.com/contact`

#### Backend Tests:
- [ ] API Health Check: `https://api.mubraizresourcesltd.com/`
  - Should return: `{"message":"Mubraiz Resources API is operational"}`
- [ ] Fleet API: `https://api.mubraizresourcesltd.com/api/fleet/vehicles`
- [ ] Shipments API: `https://api.mubraizresourcesltd.com/api/shipments`
- [ ] Admin Overview: `https://api.mubraizresourcesltd.com/api/admin/overview`

#### Authentication Tests:
- [ ] Sign up with new account
- [ ] Sign in with existing account
- [ ] Access protected admin routes
- [ ] Verify middleware redirects work

#### Database Tests:
- [ ] Check all 15 tables exist in phpMyAdmin
- [ ] Verify foreign key constraints
- [ ] Test data insertion via admin portal

---

## 🔧 TROUBLESHOOTING

### Issue: "Application Error" or White Screen

**Solution**:
1. Check Node.js app logs in cPanel
2. Verify `.env.local` exists in `public_html`
3. Ensure `npm install` completed successfully
4. Restart the Node.js application

### Issue: "Database Connection Failed"

**Solution**:
1. Verify database credentials in backend `.env`
2. Check database name: `mubraizr_logistics`
3. Ensure database user has all privileges
4. Test connection in phpMyAdmin

### Issue: "API Not Found" or CORS Errors

**Solution**:
1. Verify backend Node.js app is running
2. Check `NEXT_PUBLIC_API_URL` in frontend `.env.local`
3. Ensure backend `.env` has correct PORT (5000)
4. Restart both frontend and backend apps

### Issue: Authentication Not Working

**Solution**:
1. Verify Clerk keys match in both frontend and backend
2. Check middleware.ts is uploaded
3. Ensure `NEXT_PUBLIC_CLERK_*` variables are set
4. Clear browser cache and cookies

---

## 📝 IMPORTANT NOTES

### 1. Node.js Deployment (Not Static)
This application **CANNOT** be deployed as static HTML because:
- Uses Clerk authentication (requires server-side)
- Has middleware for route protection
- Requires Node.js runtime for API routes

### 2. File Permissions
Ensure these directories are writable (755 or 775):
- `api.mubraizresourcesltd.com/uploads/`
- `public_html/.next/cache/`

### 3. Environment Variables
**NEVER** commit `.env` or `.env.local` to Git. These contain sensitive keys.

### 4. Database Backups
Before importing the new schema, **backup your existing database** in phpMyAdmin.

---

## 🎯 QUICK DEPLOYMENT SUMMARY

### For Frontend (public_html):
1. Run `npm run build` locally
2. Upload entire project to `public_html`
3. Configure Node.js app in cPanel
4. Run NPM Install
5. Start/Restart app

### For Backend (api.mubraizresourcesltd.com):
1. Upload updated files (models, routes, config)
2. Update `.env` with database credentials
3. Run NPM Install in cPanel
4. Restart Node.js app

### For Database:
1. Import `mubraiz_logistics_schema.sql` via phpMyAdmin
2. Verify all 15 tables created
3. Test connection from backend

---

**Deployment prepared by**: Antigravity AI  
**Date**: February 11, 2026  
**Platform**: Mubraiz Resources Limited - Enterprise Logistics Platform
