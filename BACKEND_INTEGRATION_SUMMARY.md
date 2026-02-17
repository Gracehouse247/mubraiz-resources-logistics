# Backend Integration Complete: Trade & Logistics System

## Overview
The backend integration for **Fleet Management**, **Shipment Tracking**, **Client Portal**, **Admin Control Tower**, and **Partner Ecosystem** is complete. The system now features a robust Node.js/Express backend with a Sequelize (MySQL/SQLite) database, serving real-time data to the Next.js frontend.

## Key Features Implemented

### 1. Shipment Control Tower (`/portal/tracking`)
- **Real-time Telemetry**: Fetches live vessel data (Speed, Heading, Sea State, Satellite Status).
- **Milestone Tracking**: dynamic timeline of shipment progress.
- **Search**: Fully functional shipment lookup by ID (e.g., `#MR-882910-US`).

### 2. Client Portal (`/portal/client`)
- **Dashboard Stats**: Live counters for Active Shipments, Pending Invoices, and Open Tickets.
- **Invoice Vault**: Lists real invoices from the database with status and amounts.
- **Shipment List**: Shows active shipments associated with the user.

### 3. Admin Control Tower (`/portal/admin`)
- **System KPIs**: Aggregates data from all modules (Shipments, Fleet, Revenue, Vendors) into real-time metrics.
- **Kanban Board**: Visualizes shipment lifecycles (Booked -> In-Transit -> Customs -> Delivered).
- **Security Alerts**: Live feed of system alerts (from Fleet and Shipments).

### 4. Partner Ecosystem (`/partners`)
- **Dynamic Vendor Listing**: Fetches "Approved" vendors from the database and displays them alongside strategic partners.

### 5. Fleet Management (Previously Completed)
- **Live Fleet Tracking**: Map and list views of all vehicles and drivers.
- **Driver Management**: Profiles and status tracking.

## Database & API Structure

### New Models
- `Shipment`: Enhanced with `telemetryLogs`, `vesselName`, `imoNumber`.
- `Invoice`: Manages billing (`amount`, `status`, `dueDate`).
- `SupportTicket`: Tracks client issues (`priority`, `status`).
- `Vendor`: Manages partner applications and status.

### API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/shipments/:id` | Get shipment details & telemetry |
| GET | `/api/client/dashboard` | Get client stats, invoices, shipments |
| GET | `/api/admin/overview` | Get Admin KPIs, Kanban data, Alerts |
| GET | `/api/vendors?status=Approved` | Get active partners |

## How to Run

### 1. Database Setup
Initialize the database with the new schema and rich seed data:
```bash
# In Web/backend directory
node scripts/setupTradeDB.js
node scripts/setupFleetDB.js
```

### 2. Start Backend
```bash
# In Web/backend directory
node server.js
# Server runs on port 5000 (or as configured in .env)
```

### 3. Start Frontend
```bash
# In Web/frontend directory
npm run dev
# App runs on localhost:3000
```

## Next Steps
- **Authentication**: Currently using a demo user or placeholder Clerk ID. Fully enforce Clerk middleware on `clientRoutes.js` and `adminRoutes.js`.
- **Procurement**: Connect the Procurement Services forms to a new `/api/procurement/quote` endpoint.
