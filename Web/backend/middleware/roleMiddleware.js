/**
 * Middleware to enforce Role-Based Access Control (RBAC)
 * Required roles are passed as an array
 */
const checkRole = (roles) => {
    return (req, res, next) => {
        // req.auth is populated by ClerkExpressRequireAuth
        // sessionClaims contains the metadata where we store roles
        const userRole = req.auth?.sessionClaims?.metadata?.role || 'user';

        if (!roles.includes(userRole)) {
            console.warn(`🚨 Access Denied: User role '${userRole}' attempted to access restricted endpoint.`);
            return res.status(403).json({
                error: 'Access Denied: Insufficient Privileges',
                required_roles: roles,
                current_role: userRole
            });
        }

        next();
    };
};

module.exports = { checkRole };
