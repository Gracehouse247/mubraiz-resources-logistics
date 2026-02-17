# 🚀 How to Install NPM Packages via Cron Job

Since you don't have access to the Terminal, we can trick the server into running the installation command for us using a **Cron Job**.

## 🛠️ Step-by-Step Guide

1.  **Log in to cPanel**
2.  Scroll down to the **"Advanced"** section (or search in the top bar).
3.  Click on **"Cron Jobs"**.

### **Step 1: Set Up the Job**
*   **Common Settings:** Select **"Once Per Minute"** (`* * * * *`).
*   **Command:** Copy and paste the command below **EXACTLY**:

```bash
source /home/mubraizr/nodevenv/frontend_app/20/bin/activate && cd /home/mubraizr/frontend_app && npm install
```

*(This command activates your Node environment, goes to your app folder, and runs `npm install`)*

4.  Click **"Add New Cron Job"**.

### **Step 2: Wait & Verify**
1.  Wait about **2-3 minutes**.
2.  Go to **File Manager** → `frontend_app`.
3.  Refresh the folder.
4.  You should see a **`node_modules`** folder appear!

### **Step 3: DELETE THE CRON JOB (Important!)**
Once you see the `node_modules` folder:
1.  Go back to **Cron Jobs**.
2.  Find the job you just created.
3.  Click **"Delete"**.

*(If you don't delete it, your server will try to install packages every minute forever!)*

### **Step 4: Start Your App**
1.  Go to **Setup Node.js App**.
2.  Click **"Start App"**.

✅ **Done!** This is much faster than uploading a huge zip file.
