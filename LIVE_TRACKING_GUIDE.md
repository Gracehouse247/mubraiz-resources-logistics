# Live Tracking Integration Guide

This guide explains how to connect your **Mubraiz Resources** platform to real-world live tracking data.

## 1. Startup-Friendly FREE Tiers (Start Here)
If you are just starting and cannot afford Enterprise pricing, these are your best options:

### A. VesselFinder (via RapidAPI) - **Best for Startups**
- **Cost**: **FREE Basic Tier** (Check current limits on RapidAPI).
- **Data**: Real-time terrestrial AIS (Near shore).
- **Steps to get API Key**:
    1.  **Visit RapidAPI**: Go to [RapidAPI.com](https://rapidapi.com/hub) and create an account.
    2.  **Search**: Search for "VesselFinder" in the search bar.
    3.  **Pricing**: Click on the **Pricing** tab and select the **Basic (Free)** plan.
    4.  **Subscribe**: Click the "Subscribe" button (it's free).
    5.  **Copy Key**: Go back to the **Endpoints** tab. In the "Header Parameters" section on the right, you will see your `X-RapidAPI-Key`. Copy this value.

### B. AISStream.io (WebSocket)
- **Cost**: **FREE** (Community Data).
- **Data**: Real-time AIS (Ship positions) from community contributors.
- **Steps to get API Key**:
    1.  **Visit Website**: Go to [aisstream.io](https://aisstream.io/).
    2.  **Login**: Click **Login with GitHub** (or create a GitHub account first if you don't have one).
    3.  **API Keys**: Once logged in, click on **API Keys** in the navigation menu.
    4.  **Generate**: Click **Generate New Key** if one isn't already visible.
    5.  **Copy**: Copy your API key. Note: You will need to use this in a WebSocket connection.

---

## 2. Paid / Enterprise Options
**NO.** Professional logistics data providers like MarineTraffic and Project44 are **Paid Enterprise Services**.

- **MarineTraffic:** Paid subscription + Credit system (Pay per vessel lookup).
- **Project44:** High-end Enterprise Pricing (Requires contract).

---

## 3. MarineTraffic (Ocean/Vessel Tracking)
Best for tracking "Cross-Border" ocean freight (Ships/Containers).

### How to Get an API Key:
1. **Register**: Go to [MarineTraffic.com](https://www.marinetraffic.com/) and create an account.
2. **API Page**: Navigate to **Solutions > API Services**.
3. **Select Service**: You typically need **PS05 (Vessel Positions)** or **VD03 (Voyage Info)**.
4. **Pricing**: 
   - You must buy "Credits" (e.g., 1000 credits for ~$20).
   - Each "Truck" or "Ship" lookup costs 1 credit.
5. **Get Key**: Go to **My Account > API Keys**, create a new key, and copy it.

### Integrating into Mubraiz Resources:
In `Web/backend/.env`, add:
```env
MARINETRAFFIC_API_KEY=your_key_here
```

---

## 3. Project44 (End-to-End Supply Chain)
Best for large-scale enterprise tracking (Ocean + Air + Truck).

### How to Get Access:
1. **Contact Sales**: Go to [Project44.com](https://www.project44.com/) and click "Request Demo".
2. **Contract**: Sign an enterprise agreement (Costs $$$/month).
3. **Credentials**: They will provide `Client ID` and `Client Secret`.

---

## 4. FREE Alternatives (For Development)

### A. AISStream (Websocket)
- **Cost**: FREE (Community Data).
- **Data**: Real-time AIS (Ship positions) from community contributors.
- **Website**: [AISStream.io](https://aisstream.io/)
- **How**: Sign in with GitHub > Request API Key.

### B. Simulation Mode (Recommended)
Since real APIs cost money, we have built a **Simulation Script** for you.

This script:
1. Connects to your local database.
2. Automatically moves trucks and ships every 5 seconds.
3. Updates coordinates to show "Live" movement on your dashboard without spending any money.
