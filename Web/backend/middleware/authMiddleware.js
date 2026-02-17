const { ClerkExpressRequireAuth } = require('@clerk/clerk-sdk-node');

// Middleware to protect routes
const requireAuth = () => {
    return ClerkExpressRequireAuth({
        // Add custom logic if needed
    });
};

module.exports = { requireAuth };
