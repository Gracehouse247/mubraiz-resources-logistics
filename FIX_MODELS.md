# 🚀 FINAL FIX: Correct Model Imports

## 🚨 THE ISSUE FOUND

Your error logs showed: `Error: Cannot find module '../config/database'`

This is because 3 model files (`Driver.js`, `Alert.js`, `Geofence.js`) were trying to import a file named **`database.js`**, but your configuration file is actually named **`db.js`**.

I have fixed these files for you locally.

---

## 🛠️ HOW TO APPLY THE FIX

### **Step 1: Download the Fix Package**

**File**: `models-fix.zip`  
**Location**: `c:\Projects\Mubraiz Resources UI\Web\backend\models\`

### **Step 2: Upload to cPanel**

1. Login to **cPanel** → **File Manager**
2. Navigate to: `api.mubraizresourcesltd.com/models/`
3. Click **Upload**
4. Select `models-fix.zip`
5. After upload, **Right-click** the zip file → **Extract**
6. Ensure path is correct (`/home/mubraizr/api.mubraizresourcesltd.com/models`)
7. Click **"Extract File(s)"**
8. Confirm **Overwrite** if asked (or it will just replace them)

### **Step 3: Restart Node.js App**

1. Go to **Setup Node.js App**
2. Find your backend app
3. Click **"Restart"**
4. Wait 30 seconds

### **Step 4: Verify Success**

Test the API: https://api.mubraizresourcesltd.com/

You should now see:
```json
{
  "message": "Mubraiz Resources API is operational",
  "status": "Live",
  "timestamp": "..."
}
```

---

## 🔍 WHAT WAS CHANGED?

I updated `Driver.js`, `Alert.js`, and `Geofence.js`:

**Before (Broken):**
```javascript
const sequelize = require('../config/database');
```

**After (Fixed):**
```javascript
const { sequelize } = require('../config/db');
```

This ensures they point to the correct file (`db.js`) and extract the `sequelize` instance correctly.

---

**Status**: ✅ Fix packaged and ready to upload!
