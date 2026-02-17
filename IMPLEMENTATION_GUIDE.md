# Fleet Management API Integration - Step-by-Step Implementation Guide

## ✅ Current Status

**Backend**: ✅ All 11 APIs are already implemented in `Web/backend/routes/fleetRoutes.js`  
**Frontend**: 🔨 Currently using mock data - needs to connect to backend  
**Database**: ⏳ Needs to be set up and seeded

---

## 🎯 Implementation Steps

### **STEP 1: Database Setup** ⚠️ **START HERE - REQUIRES YOUR INPUT**

Before we can use the APIs, we need to set up the database.

#### Option A: Using Existing MySQL Database (Recommended)
If you already have a MySQL database for this project:

**I NEED FROM YOU:**
1. Database host (e.g., `localhost` or `your-server.com`)
2. Database name (e.g., `mubraiz_db`)
3. Database username
4. Database password
5. Database port (usually `3306`)

#### Option B: Create New Database
If you need a new database:

**On cPanel:**
1. Go to MySQL Databases
2. Create database: `mubraiz_fleet`
3. Create user with password
4. Add user to database with ALL PRIVILEGES
5. Note down the credentials

**I NEED FROM YOU:**
- Confirm which option (A or B)
- Provide the database credentials

---

### **STEP 2: Configure Environment Variables**

Once you provide database credentials, I'll update your `.env` file.

**Current .env location**: `Web/backend/.env`

**I NEED FROM YOU:**
- Confirm the database credentials from Step 1

---

### **STEP 3: Initialize Database Tables**

I'll run a script to create all necessary tables:
- `vehicles`
- `drivers`
- `gps_logs`
- `geofences`
- `alerts`

**I NEED FROM YOU:**
- Approval to run the database setup script

---

### **STEP 4: Seed Sample Data**

I'll add sample data to test the system:
- 5 vehicles (Mercedes, Volvo, Scania, MAN, DAF)
- 5 drivers with safety scores
- 3 geofences (Lagos HQ, Apapa Port, Ikeja Warehouse)

**I NEED FROM YOU:**
- Approval to seed sample data
- OR provide your own vehicle/driver data

---

### **STEP 5: Start Backend Server**

I'll start the backend API server.

**Command**: `npm start` in `Web/backend`

**I NEED FROM YOU:**
- Confirm backend server port (default: 5000)
- OR if you want a different port

---

### **STEP 6: Create API Helper (Frontend)**

I'll create `src/lib/api.ts` to centralize all API calls.

**No input needed** - I'll create this automatically.

---

### **STEP 7: Update Fleet Dashboard**

I'll update `/portal/fleet/page.tsx` to use real APIs instead of mock data.

**Changes**:
- Replace `generateMockVehicles()` with API call to `GET /api/fleet/vehicles/live`
- Replace mock alerts with API call to `GET /api/fleet/alerts`
- Update alert acknowledgment to call `PATCH /api/fleet/alerts/:id/acknowledge`

**No input needed** - I'll make these changes.

---

### **STEP 8: Update Vehicle Management**

I'll update `/portal/fleet/vehicles/page.tsx` to use real APIs.

**Changes**:
- Fetch vehicles from `GET /api/fleet/vehicles`
- Add vehicle via `POST /api/fleet/vehicles`

**No input needed** - I'll make these changes.

---

### **STEP 9: Update Driver Management**

I'll update `/portal/fleet/drivers/page.tsx` to use real APIs.

**Changes**:
- Fetch drivers from `GET /api/fleet/drivers`
- Add driver via `POST /api/fleet/drivers`

**No input needed** - I'll make these changes.

---

### **STEP 10: Test the System**

I'll guide you through testing:
1. Start backend server
2. Start frontend server
3. Visit `/portal/fleet`
4. Verify data loads from database
5. Test adding vehicles/drivers
6. Test GPS data ingestion (optional)

**I NEED FROM YOU:**
- Feedback on what works/doesn't work

---

### **STEP 11: GPS Device Integration (Optional)**

If you have real GPS devices, I'll help configure them to send data to:
`POST https://your-domain.com/api/fleet/gps/ingest`

**I NEED FROM YOU:**
- GPS device brand/model
- How the device sends data (HTTP, MQTT, TCP)
- Device documentation/manual

---

## 📋 Quick Decision Tree

**Answer these questions to proceed:**

### Question 1: Database
Do you have an existing MySQL database for this project?
- **YES** → Provide credentials (host, name, user, password, port)
- **NO** → I'll guide you to create one

### Question 2: Environment
Where will you run this?
- **Local Development** → We'll use `localhost`
- **cPanel Production** → Provide cPanel database details

### Question 3: Data
Do you want to:
- **Use sample data** → I'll seed 5 vehicles, 5 drivers, 3 geofences
- **Use your real data** → Provide vehicle/driver details

---

## 🚀 Let's Start!

**Please provide:**

1. **Database Credentials**:
   ```
   Host: _____________
   Database Name: _____________
   Username: _____________
   Password: _____________
   Port: _____________ (usually 3306)
   ```

2. **Environment**:
   - [ ] Local development (localhost)
   - [ ] cPanel production

3. **Data Preference**:
   - [ ] Use sample data (5 vehicles, 5 drivers)
   - [ ] I'll provide my own data

Once you provide this information, I'll:
1. ✅ Configure the database connection
2. ✅ Create all tables
3. ✅ Seed data
4. ✅ Update frontend to use real APIs
5. ✅ Test the complete system

**Reply with your database credentials and preferences, and we'll implement everything step by step!** 🚀
