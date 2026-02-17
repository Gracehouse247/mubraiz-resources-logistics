# Mubraiz Resources Limited | Deployment Manifest

This document outlines the high-fidelity preparation and the exact files/folders for deployment to the cPanel production grid.

## 🔗 Environment Synchronization Status
- **Backend**: Fully mapped to cPanel MySQL (`mubraizr_logistics`) via standard environment variables.
- **Frontend**: Successfully synchronized. All hardcoded `localhost:5000` endpoints replaced with `process.env.NEXT_PUBLIC_API_URL`.
- **WebSocket Protocol**: Fully synchronized for production (`io(process.env.NEXT_PUBLIC_API_URL)`).

## 🚀 1. Backend Core (Upload to `api.mubraizresourcesltd.com` root)
Upload these items to the cPanel folder where the Node.js application root is defined.

### 📂 Folder Structure
- `/config` - Database and WebSocket initializers.
- `/middleware` - RBAC and Auth synchronization (Clerk integration).
- `/models` - Sequelize schema for Shipments, Fleet, and Vendors.
- `/routes` - API nodes (Restricted & Public).
- `/uploads` - **Required (Empty)**: Directory for document synchronization.

### 📄 Essential Files
- `server.js` - The main mission control entry point.
- `package.json` - Node dependencies for production.
- `.env` - (DO NOT UPLOAD - Input manually in cPanel Node Selector as shown in the screenshots).

---

## 🎨 2. Frontend Grid (Static Export to `public_html`)
Since the application uses `output: 'export'`, you must upload the contents of the `Web/frontend/out` directory.

### 📂 Folder Structure
- `/_next` - Compiled framework logic.
- `/images` - Branded assets and executive hero imagery.
- `/legal` - Privacy & TOS compliance nodes.
- `/portal` - Administrative Command interfaces.
- `/services` - Service-specific intelligence nodes.
- `/tools` - Integrated calculators and tracking utilities.

### 📄 Essential Files
- `index.html` - Main landing entry point.
- `404.html` - Branded exception handler.
- `robots.txt` - SEO grid instructions.
- `sitemap.xml` - Public grid mapping.

---

## 🗄️ 3. Database Architecture (MySQL)
The backend is configured to use the **`mubraizr_logistics`** database. 

### ⚙️ Initialization Steps:
1. Access **cPanel > MySQL Databases**.
2. Create database: `mubraizr_logistics`.
3. Create user: `mubraizr_admin` with privileges.
4. From the terminal in cPanel, run the sync command or import the schema.

### 🧬 Table Synchronization
The system will automatically generate the following tables upon first start via `sequelize.sync()`:
- `Shipments` - Tracking and telemetry.
- `Vehicles` - Fleet asset metadata.
- `Drivers` - Workforce identities.
- `Invoices` - Financial yield data.
- `AdminLogs` - Security & Error Intelligence audits.

---

## 🛡️ 4. Security & Error Intelligence
- **RBAC**: Enforced at the middleware level. `fleet_manager` restricted from executive financial endpoints.
- **Error Capture**: `ErrorIntelligence.tsx` is active globally. Exceptions are logged to the `AdminLogs` table in the database.

**Mission Ready.**
