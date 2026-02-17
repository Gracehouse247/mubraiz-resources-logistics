---
description: How to deploy the Mubraiz Resources Frontend to cPanel
---

# 🚀 Mubraiz Resources: Frontend Deployment Guide

This project is configured for **Static HTML Export**, making it highly compatible with standard cPanel shared hosting. 

## 🏗️ Step 1: Generate the Build
Before deploying, ensure you have the latest production-ready files by running the build command in the `Web/frontend` directory.

```powershell
npm run build
```

The exported site will be located in: `Web/frontend/out/`

## 📦 Step 2: Prepare for Upload
The most efficient way to upload to cPanel is by zipping the contents of the `out` folder.

1. Navigate to `Web/frontend/out/`.
2. Select all files and folders inside (including `_next/`, `images/`, `index.html`, etc.).
3. Compress them into a single file named `frontend.zip`.
   - **Note:** Do not zip the `out` folder itself, only the *contents* inside it.

## 📤 Step 3: Upload to cPanel
1. Login to your **cPanel Dashboard**.
2. Open **File Manager**.
3. Navigate to your domain's root folder (usually `public_html`).
4. Click **Upload** and select `frontend.zip`.
5. Once uploaded, right-click `frontend.zip` and select **Extract**.
6. Delete the `frontend.zip` file to keep the server clean.

## 🛠️ Step 4: Configure Routing & HTTPS (.htaccess)
To ensure Clean URLs (no `.html` suffix) and force secure connections, create or edit the `.htaccess` file in your `public_html` root and add:

```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Handle Clean URLs (Remove .html suffix)
# This is handled by next.config.ts trailingSlash: true which creates folder/index.html structures.
# However, if any links point to .html, this helps.

# Custom 404 Routing
ErrorDocument 404 /404.html
```

## 🔍 Step 5: Post-Deployment Verification
Verify the deployment by checking:
- [ ] **Home Page**: [mubraizresourcesltd.com](https://mubraizresourcesltd.com) (or your configured domain).
- [ ] **Sub-pages**: Check `/about/` and `/services/` to ensure routing works.
- [ ] **Assets**: Confirm all images in the `images/` directory are loading correctly.
- [ ] **SEO**: View page source to ensure meta tags and JSON-LD are present.

---
*Created by Antigravity AI for Mubraiz Resources Ltd.*
