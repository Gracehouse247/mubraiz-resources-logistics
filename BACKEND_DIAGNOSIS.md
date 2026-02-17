# 🔍 DIAGNOSIS: Backend App Crashing on Startup

## 📊 CURRENT STATUS (From Screenshots)

✅ **Node.js App**: Started (v20.20.0)  
✅ **Application Mode**: Production  
✅ **Application Root**: `/home/mubraizr/api.mubraizresourcesltd.com`  
✅ **Startup File**: `server.js`  
✅ **Environment Variables**: Configured in cPanel UI  
❌ **API Response**: 503 Service Unavailable  
⚠️ **Directory Listing**: Shows "Index of /" (app not serving)

---

## 🚨 IDENTIFIED ISSUES

### **Issue #1: Environment Variables in cPanel UI vs .env File**

I can see you've added environment variables in the **cPanel Node.js interface**, which is good. However, the backend code uses `dotenv` package which reads from a **`.env` file**.

**The Problem**: 
- cPanel environment variables are available to the Node.js process
- BUT `dotenv.config()` in `server.js` tries to load from `.env` file
- If `.env` file is missing, the app might not read the cPanel variables

---

## 🛠️ SOLUTION: Create .env File in Backend

### **Step 1: Check if .env File Exists**

1. Go to **File Manager** in cPanel
2. Navigate to: `/home/mubraizr/api.mubraizresourcesltd.com/`
3. Look for `.env` file (it might be hidden)
4. Click **"Settings"** (top right) → Enable **"Show Hidden Files"**

### **Step 2: Create .env File**

If `.env` doesn't exist, create it:

1. In File Manager, click **"+ File"**
2. Name it: `.env`
3. Right-click → **"Edit"**
4. Add this content:

```env
NODE_ENV=production

# Database Credentials
DB_HOST=localhost
DB_NAME=mubraizr_logistics
DB_USER=mubraizr_admin
DB_PASSWORD=mTHrEJTYE+ojot

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=pk_test_d2lzZS15YWstMjguY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_rIk137zYjlsxcvK1b3DrNk2hGRJQC10UaiRazoqvce

# Port (optional - cPanel assigns automatically)
# PORT=5000
```

5. **Save** the file
6. Go back to **Setup Node.js App**
7. Click **"Restart"** on your backend app

---

## 🔍 ALTERNATIVE: Modify server.js to Use Process.env

If creating `.env` doesn't work, we need to modify the backend to use cPanel's environment variables directly.

### **Option A: Make dotenv Optional**

Edit `server.js` and change line 10:

**Current:**
```javascript
dotenv.config();
```

**Change to:**
```javascript
dotenv.config({ path: '.env' });
// Fallback: If .env doesn't exist, use cPanel environment variables
if (!process.env.DB_NAME) {
    console.log('⚠️ .env file not found, using cPanel environment variables');
}
```

---

## 🗄️ VERIFY DATABASE CONNECTION

### **Step 1: Check Database Exists**

1. Go to **phpMyAdmin**
2. Look for database: `mubraizr_logistics`
3. Click on it
4. Verify you see **15 tables**:
   - Drivers, Vehicles, Shipments, Invoices, ProcurementRequests
   - AuditLogs, Vendors, Assets, Messages, Posts
   - SupportTickets, GPSLogs, Geofences, Alerts, ContactSubmissions

### **Step 2: If Tables Missing**

1. Click **"Import"** tab
2. Upload: `mubraiz_logistics_schema.sql`
3. Click **"Go"**

---

## 📋 CHECK APPLICATION LOGS

### **How to View Logs:**

1. In **Setup Node.js App**, scroll down
2. Look for **"Log file"** or **"Application logs"**
3. Click to view

### **What to Look For:**

**Good signs:**
```
✅ Database connected successfully.
✅ Models synchronized.
🚀 Production Server with WebSockets running on port XXXXX
```

**Bad signs (errors):**
```
❌ Database connection failed
❌ Cannot find module
❌ ECONNREFUSED
❌ Access denied for user
❌ Unknown database
```

---

## 🔄 COMPLETE RESTART PROCEDURE

Try this sequence:

1. **Stop** the app in Setup Node.js App
2. **Create `.env` file** (as shown above)
3. **Verify database** exists in phpMyAdmin
4. **Run NPM Install** (in Setup Node.js App)
5. **Wait** for installation to complete (2-3 minutes)
6. **Start** the app
7. **Wait** 30 seconds
8. **Test**: https://api.mubraizresourcesltd.com/

---

## 🎯 EXPECTED RESULT

When working, you should see:

```json
{
  "message": "Mubraiz Resources API is operational",
  "status": "Live",
  "timestamp": "2026-02-12T00:02:33.000Z"
}
```

---

## 🚨 IF STILL NOT WORKING

### **Get the Error Logs:**

1. In **Setup Node.js App**, find the **log file path**
2. Usually: `/home/mubraizr/logs/api.mubraizresourcesltd.com.log`
3. Open in File Manager
4. Copy the **last 20-30 lines** (especially red/error lines)
5. Share those error messages

### **Common Error Solutions:**

| Error Message | Solution |
|---------------|----------|
| `Database connection failed` | Check `.env` DB credentials |
| `Cannot find module 'express'` | Run NPM Install |
| `ECONNREFUSED` | Database not running or wrong host |
| `Access denied for user` | Wrong DB password |
| `Unknown database` | Import schema SQL file |
| `Port already in use` | Remove PORT from `.env` |

---

## ✅ IMMEDIATE ACTION ITEMS

1. [ ] Create `.env` file in `/home/mubraizr/api.mubraizresourcesltd.com/`
2. [ ] Verify database `mubraizr_logistics` exists
3. [ ] Check if 15 tables exist in database
4. [ ] Restart Node.js app
5. [ ] Check application logs for errors
6. [ ] Test URL: https://api.mubraizresourcesltd.com/

---

**Most Likely Fix**: Create the `.env` file! The cPanel environment variables won't be read by `dotenv.config()` without the file.

**Created**: February 12, 2026, 1:05 AM WAT
