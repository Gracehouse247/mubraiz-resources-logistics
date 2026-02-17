# 📦 DEPLOYMENT PACKAGES READY

## ✅ ZIP FILES CREATED

### 1. **Frontend Package** 
**File**: `Web/frontend/frontend-deployment.zip`  
**Size**: 18.89 MB  
**Upload to**: `public_html/` in cPanel

**Contents**:
```
✅ .next/build/          (Production build)
✅ .next/cache/          (Build cache)
✅ .next/server/         (Server-side code)
✅ .next/static/         (Static assets)
✅ .next/types/          (TypeScript definitions)
✅ public/               (Images, fonts, SVGs)
✅ src/                  (Source code - app, components, lib)
✅ package.json          (Dependencies)
✅ package-lock.json     (Lock file)
✅ next.config.ts        (Next.js config)
✅ tsconfig.json         (TypeScript config)
✅ postcss.config.mjs    (PostCSS config)
✅ .env.local            (Environment variables)
```

---

### 2. **Backend Package**
**File**: `Web/backend/backend-deployment.zip`  
**Size**: 0.05 MB  
**Upload to**: `api.mubraizresourcesltd.com/` in cPanel

**Contents**:
```
✅ config/               (db.js, socket.js)
✅ middleware/           (auth.js, validateRequest.js)
✅ models/               (ALL 14 model files)
✅ routes/               (ALL 11 route files)
✅ scripts/              (Utility scripts)
✅ uploads/              (Upload directory)
✅ package.json          (Dependencies)
✅ package-lock.json     (Lock file)
✅ server.js             (Entry point)
✅ .env                  (Environment variables)
```

---

## 📤 UPLOAD INSTRUCTIONS

### **Step 1: Upload Frontend**
1. Login to **cPanel** → **File Manager**
2. Navigate to `public_html/`
3. Click **Upload**
4. Select `frontend-deployment.zip`
5. After upload, **right-click** → **Extract**
6. **Delete** the zip file after extraction
7. Verify all folders are in `public_html/` (not in a subfolder)

### **Step 2: Upload Backend**
1. In **File Manager**, navigate to `api.mubraizresourcesltd.com/`
2. Click **Upload**
3. Select `backend-deployment.zip`
4. After upload, **right-click** → **Extract**
5. **Delete** the zip file after extraction
6. Verify all folders are in root (not in a subfolder)

### **Step 3: Configure Node.js Apps**

#### Frontend:
1. Go to **Setup Node.js App**
2. Find or create app for `public_html`
3. Click **"Run NPM Install"**
4. Click **"Start"** or **"Restart"**

#### Backend:
1. In **Setup Node.js App**
2. Find app for `api.mubraizresourcesltd.com`
3. Click **"Run NPM Install"**
4. Click **"Restart"**

### **Step 4: Import Database**
1. Go to **phpMyAdmin**
2. Select `mubraizr_logistics` database
3. Click **Import** tab
4. Upload `mubraiz_logistics_schema.sql` (from project root)
5. Click **Go**
6. Verify 15 tables created

---

## ⚠️ IMPORTANT NOTES

### **After Extraction, Verify Structure**

**Frontend should look like:**
```
public_html/
├── .next/
├── public/
├── src/
├── package.json
└── .env.local
```

**Backend should look like:**
```
api.mubraizresourcesltd.com/
├── config/
├── middleware/
├── models/
├── routes/
├── server.js
└── .env
```

### **If Files Are in a Subfolder**
If extraction creates a subfolder (e.g., `public_html/frontend-deployment/`):
1. **Move all contents** up one level
2. Delete the empty subfolder
3. Ensure files are directly in `public_html/`

---

## 🔐 ENVIRONMENT VARIABLES

### **CRITICAL: Update `.env` in Backend**

After extracting backend, edit `.env` file to ensure database password is correct:

```env
DB_PASSWORD=mTHrEJTYE+ojot
```

Verify this matches your cPanel MySQL password!

---

## 🧪 TEST AFTER DEPLOYMENT

1. ✅ https://mubraizresourcesltd.com
2. ✅ https://api.mubraizresourcesltd.com/
3. ✅ https://mubraizresourcesltd.com/auth/login
4. ✅ https://mubraizresourcesltd.com/portal/admin/dashboard

---

## 📍 FILE LOCATIONS

**Frontend ZIP**: `c:\Projects\Mubraiz Resources UI\Web\frontend\frontend-deployment.zip`  
**Backend ZIP**: `c:\Projects\Mubraiz Resources UI\Web\backend\backend-deployment.zip`  
**Database SQL**: `c:\Projects\Mubraiz Resources UI\mubraiz_logistics_schema.sql`

---

**Status**: ✅ **READY TO UPLOAD**  
**Created**: February 11, 2026, 7:20 PM WAT
