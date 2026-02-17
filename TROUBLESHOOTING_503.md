# 🚨 TROUBLESHOOTING: 503 Service Unavailable

## ❌ ERROR: API Backend Not Running

**URL**: https://api.mubraizresourcesltd.com/  
**Error**: 503 Service Unavailable  
**Cause**: Node.js application is not running or crashed

---

## 🔍 DIAGNOSTIC STEPS

### **Step 1: Check Node.js App Status in cPanel**

1. Login to **cPanel**
2. Go to **Setup Node.js App**
3. Find the app for `api.mubraizresourcesltd.com`
4. Check the **Status** column

**Possible statuses:**
- 🔴 **Stopped** → App is not running
- 🟡 **Starting** → App is starting up
- 🟢 **Running** → App should be working (but check logs)
- 🔴 **Error** → App crashed

---

### **Step 2: Check Application Logs**

In the Node.js App interface:
1. Click **"Open Logs"** or find the log file path
2. Look for error messages

**Common errors to look for:**
```
❌ Database connection failed
❌ Cannot find module
❌ Port already in use
❌ Environment variable not set
❌ Syntax error in code
```

---

## 🛠️ SOLUTIONS BY ERROR TYPE

### **Solution 1: App is Stopped**

**Action**: Start the application
1. In **Setup Node.js App**, click **"Start App"**
2. Wait 10-20 seconds
3. Check status again
4. Test URL: https://api.mubraizresourcesltd.com/

---

### **Solution 2: Database Connection Error**

**Error in logs**: `Database connection failed` or `ECONNREFUSED`

**Fix**:
1. Go to **File Manager** → `api.mubraizresourcesltd.com`
2. Edit `.env` file
3. Verify these values:

```env
DB_NAME=mubraizr_logistics
DB_USER=mubraizr_admin
DB_PASSWORD=mTHrEJTYE+ojot
DB_HOST=localhost
```

4. **CRITICAL**: Ensure `DB_PASSWORD` matches your MySQL password
5. Save the file
6. **Restart** the Node.js app

**To verify database credentials:**
1. Go to **MySQL Databases** in cPanel
2. Check the database name and user
3. If password is wrong, reset it in **MySQL Databases** → **Current Users** → **Change Password**
4. Update `.env` with new password

---

### **Solution 3: Missing Dependencies**

**Error in logs**: `Cannot find module 'express'` or similar

**Fix**:
1. In **Setup Node.js App**, find your backend app
2. Click **"Run NPM Install"**
3. Wait for installation to complete (may take 2-3 minutes)
4. Click **"Restart"**

---

### **Solution 4: Port Conflict**

**Error in logs**: `Port 5000 already in use` or `EADDRINUSE`

**Fix**:
1. Edit `.env` file
2. Change `PORT=5000` to `PORT=5001` (or remove PORT line entirely)
3. Save and **Restart** app

**Note**: cPanel often assigns ports automatically, so you may not need to specify PORT at all.

---

### **Solution 5: Missing .env File**

**Error in logs**: `DB_NAME is not defined` or similar

**Fix**:
1. Go to **File Manager** → `api.mubraizresourcesltd.com`
2. Check if `.env` file exists
3. If missing, create it with this content:

```env
NODE_ENV=production
PORT=5000

# Database Credentials
DB_NAME=mubraizr_logistics
DB_USER=mubraizr_admin
DB_PASSWORD=mTHrEJTYE+ojot
DB_HOST=localhost

# Clerk Authentication
CLERK_PUBLISHABLE_KEY=pk_test_d2lzZS15YWstMjguY2xlcmsuYWNjb3VudHMuZGV2JA
CLERK_SECRET_KEY=sk_test_rIk137zYjlsxcvK1b3DrNk2hGRJQC10UaiRazoqvce
```

4. Save and **Restart** app

---

### **Solution 6: Wrong Application Startup File**

**Check**:
1. In **Setup Node.js App**, verify:
   - **Application startup file**: `server.js`
   - **Application root**: `api.mubraizresourcesltd.com`

**If wrong**:
1. Click **"Edit"**
2. Set **Application startup file** to `server.js`
3. Click **"Save"**
4. Click **"Restart"**

---

### **Solution 7: Database Not Imported**

**Error in logs**: `Table 'mubraizr_logistics.Drivers' doesn't exist`

**Fix**:
1. Go to **phpMyAdmin**
2. Select `mubraizr_logistics` database
3. Check if tables exist (should see 15 tables)
4. If no tables, go to **Import** tab
5. Upload `mubraiz_logistics_schema.sql`
6. Click **Go**
7. **Restart** Node.js app

---

### **Solution 8: File Permissions Issue**

**Error in logs**: `EACCES: permission denied`

**Fix**:
1. In **File Manager**, right-click `api.mubraizresourcesltd.com` folder
2. Select **"Change Permissions"**
3. Set to **755** for directories
4. Set to **644** for files
5. Check **"Recurse into subdirectories"**
6. Click **"Change Permissions"**
7. **Restart** app

---

## 🔄 COMPLETE RESTART PROCEDURE

If nothing works, try this full reset:

1. **Stop the app** in Setup Node.js App
2. **Delete `node_modules`** folder in File Manager
3. **Run NPM Install** again
4. **Verify `.env` file** exists and is correct
5. **Check database** exists in phpMyAdmin
6. **Start the app**
7. **Wait 30 seconds**
8. **Check logs** for errors
9. **Test URL**: https://api.mubraizresourcesltd.com/

---

## ✅ SUCCESS INDICATORS

When working correctly, you should see:

**URL**: https://api.mubraizresourcesltd.com/  
**Response**:
```json
{
  "message": "Mubraiz Resources API is operational",
  "status": "Live",
  "timestamp": "2026-02-11T..."
}
```

---

## 📞 NEXT STEPS

1. **Check Node.js app status** in cPanel
2. **Read the logs** to identify the specific error
3. **Apply the appropriate solution** from above
4. **Restart the app**
5. **Test the URL** again

**If still not working**, please share:
- The **error message** from the logs
- The **app status** (Stopped/Running/Error)
- Any **red text** in the log file

---

**Created**: February 11, 2026, 7:35 PM WAT
