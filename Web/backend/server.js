const express = require('express');
const http = require('http');
const cors = require('cors');
const helmet = require('helmet');
const dotenv = require('dotenv');
const { sequelize } = require('./config/db');
const socketConfig = require('./config/socket');

// Load environment variables
dotenv.config();

// ... (Routes)
const trackingRoutes = require('./routes/trackingRoutes');
const vendorRoutes = require('./routes/vendorRoutes');
const fleetRoutes = require('./routes/fleetRoutes');
const clientRoutes = require('./routes/clientRoutes');
const adminRoutes = require('./routes/adminRoutes');
const procurementRoutes = require('./routes/procurementRoutes');
const contactRoutes = require('./routes/contactRoutes');
const assetRoutes = require('./routes/assetRoutes');
const messageRoutes = require('./routes/messageRoutes');
const postRoutes = require('./routes/postRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

const app = express();
const server = http.createServer(app);
const PORT = process.env.PORT || 5000;

// Initialize Socket.io
socketConfig.init(server);

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Serve Static Uploads
app.use('/uploads', express.static('uploads'));

// Routes
// ... (same app.use calls)
app.use('/api/shipments', trackingRoutes);
app.use('/api/vendors', vendorRoutes);
app.use('/api/fleet', fleetRoutes);
app.use('/api/client', clientRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/procurement', procurementRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/assets', assetRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/tickets', ticketRoutes);

// ... (Health Check)
app.get('/', (req, res) => {
    res.json({
        message: 'Mubraiz Resources API is operational',
        status: 'Live',
        timestamp: new Date()
    });
});

// Database Connection & Server Start
const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('✅ Database connected successfully.');

        await sequelize.sync();
        console.log('✅ Models synchronized.');

        server.listen(PORT, () => {
            console.log(`🚀 Production Server with WebSockets running on port ${PORT}`);
        });
    } catch (error) {
        console.error('❌ Database connection failed:', error);
    }
};

startServer();

