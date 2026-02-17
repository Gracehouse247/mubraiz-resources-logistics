# cPanel Deployment Fix Guide

## 🔴 Issues Found in Error Log

1. **`next.config.ts` conflict** - Server trying to load TypeScript config
2. **Missing dependencies** - `next` module not found
3. **File permission errors** - EACCES on `.next` folder
4. **Turbopack runtime issues** - Missing chunk files

---

## ✅ Step-by-Step Fix

### 1. Clean Up Config Files on Server

**In cPanel File Manager:**
- Navigate to `/home/mubraizr/frontend_app/`
- **DELETE** `next.config.ts` (if it exists)
- **KEEP** `next.config.js` only

### 2. Install Dependencies

**In cPanel → Setup Node.js App:**
1. Click on your `frontend_app` application
2. Click **"Run NPM Install"** button
3. Wait for completion (may take 2-3 minutes)
4. You should see "Completed" status

### 3. Fix File Permissions

**In cPanel → Terminal:**
```bash
cd ~/frontend_app
chmod -R 755 .next
chmod -R 755 public
chmod -R 755 src
chmod 644 package.json
chmod 644 next.config.js
chmod 644 server.js
```

### 4. Verify Folder Structure

Your `frontend_app` folder should contain:
```
frontend_app/
├── .next/           ← Production build
├── public/          ← Images and assets
├── src/             ← Source code
├── tmp/             ← Empty folder
├── node_modules/    ← Created by NPM Install
├── .env.local       ← Environment variables
├── next.config.js   ← JavaScript config (NOT .ts)
├── package.json
├── package-lock.json
├── server.js
├── postcss.config.mjs
├── tsconfig.json
└── next-env.d.ts
```

### 5. Restart the Application

**In cPanel → Setup Node.js App:**
1. Click **"Stop App"**
2. Wait 5 seconds
3. Click **"Start App"** (or it will auto-restart)
4. Check the **"Open"** link to see if the site loads

---

## 🔍 How to Check if It's Working

### Check 1: Dependencies Installed
In cPanel Terminal:
```bash
cd ~/frontend_app
ls node_modules/next
```
You should see Next.js files listed.

### Check 2: Application Running
In cPanel → Setup Node.js App:
- Status should show **"Running"**
- No errors in the log viewer

### Check 3: Website Loads
Visit your domain - you should see your homepage, not an error page.

---

## 🚨 If Still Not Working

### Check Error Logs
**In cPanel → Setup Node.js App:**
- Scroll down to "Log" section
- Look for the **latest** error message
- Common issues:
  - `MODULE_NOT_FOUND` → Run NPM Install again
  - `EACCES` → Fix permissions (Step 3)
  - `next.config.ts` error → Delete the .ts file (Step 1)

### Nuclear Option: Fresh Upload
If nothing works:
1. **Stop** the Node.js app
2. **Delete** everything in `frontend_app/` folder
3. **Upload** the new `mubraiz_frontend_UPLOAD.zip`
4. **Extract** the zip
5. **Run NPM Install**
6. **Fix permissions** (Step 3)
7. **Restart** the app

---

## 📝 Important Notes

- **Always use `next.config.js`** (not `.ts`) on cPanel
- **Always run "NPM Install"** after uploading new files
- **Always check permissions** if you see EACCES errors
- **Never upload `node_modules`** - let cPanel install them
- **Never upload `.next/cache`** - it causes issues

---

## ✅ Checklist Before Each Deployment

- [ ] Build completed successfully locally
- [ ] `next.config.js` exists (not `.ts`)
- [ ] Uploaded and extracted zip file
- [ ] Ran "NPM Install" in cPanel
- [ ] Fixed file permissions
- [ ] Restarted the Node.js app
- [ ] Checked error logs
- [ ] Tested the live site
