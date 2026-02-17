---
title: "Mubraiz Resources: Logistics & Resources UI"
status: "In Progress"
current_phase: "Frontend Implementation & Refinement"
last_updated: "2026-02-02"
---

# Project Implementation Plan & Status Report

## 📋 Executive Summary
Mubraiz Resources Ltd is evolving into a premium digital platform for logistics, haulage, and resource management. We are currently building a high-performance, SEO-optimized Web frontend using Next.js, tailored for deployment on cPanel hosting.

---

## 🏗️ Current Project Status

### ✅ Completed
- **Project Infrastructure**: Setup Next.js, TypeScript, and Tailwind CSS.
- **Agent Intelligence**: Global and project-level skills installed (Stitch, SEO, Performance, Project Management).
- **Home Page Structure**: Implementing core sections (Hero, Partners, Infrastructure, Service Zones).
- **Global Layout**: Premium Header and Footer developed with "Ecosystem" access.
- **Environment Cleanup**: Removed Vercel-specific assets.
- **Typography & Branding**: Transitioned to **Outfit** font (brand) and Inter (UI).
- **Micro-animations**: Integrated `framer-motion` for premium UX feels.
- **Homepage Refinement**: Applied glassmorphism, stagger animations, and pixel-perfect global styling.
- **Client & Admin Portals**:
    - **Auth Suite**: Secure Login, Registration, and Integrated Gateway established.
    - **Client Ecosystem**: Advanced Dashboard, Cargo Claims, and Document Vault.
    - **Admin Control Tower**: Fleet monitor, Revenue analytics, and Kanban lifecycle management.
    - **Tracking & Logistics**: Real-time milestone tracker and digital ePOD system.
    - **Support Center**: Secure ticketing and live communication channel.
- **Interactive Logistics Tools**:
    - **Expert Consultation Scheduler**: Multi-step booking wizard with dynamic date/time selection.
    - **Shipping Cost Calculator**: Real-time volumetric weight calculator with Green Logistics (CO2) insights.
    - **Network Command Center**: Full-screen interactive global route map with live telemetry simulation.
    - **Control Tower Tracking**: Immersive AIS/GPS overhaul with live telemetry HUD and exception monitoring.
- **Fleet & Asset Showcase**:
    - **Asset Showcase Gallery**: High-fidelity masonry registry of Peterbilt, Kenworth, and specialized haulage units.
    - **Safety & Technical Excellence**: Deep-dive into ISO-grade protocols, real-time diagnostics, and driver excelence training.
- **Strategic Partners & Investors Hub**:
    - **Investor Relations Portal**: Performance metrics, tiered partnership tiers, and downloadable financial reports.
    - **Equity & Alliance Framework**: Dedicated space for high-yield stakeholders and corporate governance.
- **Integrated Client Portal Refinement**:
    - **Shared Portal Architecture**: Unified layout with sidebar and universal search.
    - **Invoices & Financials**: Dedicated ledger and document vault for freight/customs.
    - **Customs & Trade Library**: Global repository for AfCFTA and international shipping forms.
    - **Refined Dashboard & Claims**: Immersive visuals for shipment overviews and legal escalations.
- **Sustainability & Green Logistics Hub**:
    - **Eco-Cargo Dashboard**: Performance charts for carbon reduction and fleet efficiency.
    - **Interactive Eco-Calculator**: Real-time CO2 savings simulator for clients.
    - **Audit Repository**: Technical transparency section for ESG reports.
- **Global Network Command Center**:
    - **Interactive Map Architecture**: SVG-based corridor mapping for Sea, Road, and Rail.
    - **Hub Intelligence**: Real-time telemetry surfaces for regional nodes (Lagos, Durban, etc.).
    - **Congestion Monitoring**: Live alert system for port delays and border escalations.
- **Global Trade Services Detail (AfCFTA Technical Deep-Dive)**:
    - **Technical Interface**: Triple-mode surface for Compliance, Guides, and Tariffs.
    - **Eligibility Engine**: Visual compliance gauge with real-time duty saving estimations.
    - **Document Repository**: Technical specifications for Certificate of Origin and HS classifications.
- **Interactive Shipping Cost Calculator**:
    - **Wizard Architecture**: Multi-step flow (Route > Package > Options > Quote).
    - **Chargeable Weight Engine**: Volumetric vs Actual weight logic with visual insights.
    - **ESG Integration**: Real-time carbon footprint estimation and offset commerce.
- **Digital Proof of Delivery (ePOD) & Waybill Utility**:
    - **Verification System**: Public tool for waybill authenticity via secure-ledger hashing.
    - **ePOD Interface**: Evidence surfaces for photo logs, GPS coordinates, and digital signatures.
    - **Capture Simulation**: Mock field-data ingestion for driver/receiver confirmation.
- **Knowledge Engine & Trade Wiki**:
    - **Unified Repository**: Central hub for Trade Insights, Logistics Glossary, and Incoterms.
    - **Semantic Interface**: High-fidelity article surfaces with editorial elements and technical dossier archives.
    - **Interactive Matrix**: Dynamic Incoterms 2020 responsibility chart with risk allocation visualization.
- **Case Study & Success Gallery**:
    - **Showcase Hub**: High-fidelity 'Success Grid' with tactical outcome telemetry and multi-sector filtering.
    - **Dynamic Case Studies**: Deep-dive narrative architecture for corridor optimization and infrastructure success stories.
    - **Operational Telemetry**: Real-time impact visualization with pulse-animated metrics and client testimonials.
- **Final UI/UX Audit & SEO Implementation**:
    - **Global SEO Architecture**: Integrated JSON-LD (Organization, Services, WebApp) and dynamic technical sitemaps.
    - **Performance Optimization**: Dynamic server-side metadata extraction and asset telemetry refinement.
    - **Structural Integrity**: Verified semantic HTML hierarchy (H1-H6) and accessibility descriptors across all core pages.

---

## 🗺️ Implementation Roadmap

### Phase 1: UI/UX Excellence (Current)
- [x] **Exact Match Refinement**: audit all homepage components against the approved HTML structure.
- [x] **Visual wow-factor**: Implement micro-animations and "glassmorphism" effects as requested by the system design guidelines.
- [x] **Service Detail Pages**: Build out specific pages for "Fleet & Haulage" based on existing Stitch projects.

### Phase 2: Content & CMS Integration
- [ ] **Sanity CMS Setup**: Configure schemas for:
    - Team Management
    - Services & Projects
    - Case Studies/Testimonials
- [ ] **Dynamic Data Fetching**: Connect the frontend to the CMS via GROQ queries.

### Phase 3: SEO & Performance Optimization
- [x] **Technical SEO Checker**: Implement structured data (JSON-LD) for Logistics.
- [x] **Performance Audit**: Optimize images and achieve 90+ Lighthouse scores.
- [ ] **Analytics**: Setup non-Vercel based tracking (e.g., Google Analytics).

### Phase 4: cPanel Deployment
- [ ] **Build Configuration**: Setup `output: 'export'` in `next.config.js`.
- [ ] **Deployment Script**: Create a specialized workflow for FTP/File Manager upload.
- [ ] **SSL & Domain Setup**: Final verification on the hosting server.

---

## 🛠️ Specialized Directives Checklist
- [x] **Premium Aesthetics**: Use Outfit/Inter fonts and custom HSL palettes. No generic bootstrap-style colors.
- [x] **Zero Vercel/Next Auth Dependencies**: Ensure all features work on static/node shared hosting.
- [x] **AI-Assisted Iteration**: Use `stitch-loop` for rapid UI prototyping.

---

## 🚦 Risk Management
- **Hosting Constraints**: Next.js "App Router" features like Server Actions or ISR may require Node.js support in cPanel (Select Node.js Version).
    - *Mitigation*: We will build for "Static Export" by default unless Node.js is confirmed active on the server.

---
*Next Action: Final UI/UX Polish & Deployment Handover.*

## ✅ Production Readiness Verified
- **Static Export**: Configured `output: 'export'` for cPanel compatibility.
- **Dynamic Routing**: Implemented `generateStaticParams` for Case Study corridors.
- **SEO Optimization**: Established static `robots.txt` and `sitemap.xml` for indexed discoverability.
- **Dependency Audit**: Verified Next.js 16/React 19 stability across all core modules.
