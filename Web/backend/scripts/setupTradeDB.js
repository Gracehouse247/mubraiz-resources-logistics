/**
 * Trade Dynamics & Client Portal DB Setup
 * Run this to create and seed Shipments, Invoices, and Tickets
 */

require('dotenv').config();
const { sequelize } = require('../config/db');
const { Shipment } = require('../models/Shipment');
const { Invoice } = require('../models/Invoice');
const { SupportTicket } = require('../models/SupportTicket');

async function setupTradeDB() {
    try {
        console.log('🔄 Connecting to Trade DB...');
        await sequelize.authenticate();
        console.log('✅ Connected successfully.\n');

        // Sync models
        await sequelize.sync({ alter: true });
        console.log('✅ Tables synced (Shipments, Invoices, Tickets).\n');

        // Seed Shipments (Rich Mock Data)
        console.log('🔄 Seeding Shipments...');
        await Shipment.bulkCreate([
            {
                id: '#MR-882910-US',
                origin: 'Shanghai, CN',
                destination: 'Long Beach, US',
                clientName: 'Alex Client',
                status: 'In-Transit',
                currentLocation: '34.0522° N, 118.2437° W',
                estimatedDelivery: new Date('2026-11-03'),
                vesselName: 'NORTHERN JASPER',
                imoNumber: '9311451',
                mmsi: '249373000',
                speed: 18.4,
                heading: 274,
                seaState: 'Moderate (2.4m)',
                satelliteStatus: 'ACTIVE (L-BAND)',
                telemetryLogs: [
                    { status: 'Departed', location: 'Shanghai Port', timestamp: new Date(Date.now() - 86400000 * 5) },
                    { status: 'In-Transit', location: 'Pacific Ocean', timestamp: new Date(Date.now() - 86400000 * 2) }
                ],
                clientId: 'user_2rxMq9...' // Placeholder Clerk ID
            },
            {
                id: '#MR-774102-EU',
                origin: 'Rotterdam, NL',
                destination: 'Lagos, NG',
                clientName: 'Alex Client',
                status: 'Customs',
                currentLocation: 'Apapa Port Control',
                estimatedDelivery: new Date('2026-10-30'),
                vesselName: 'MAERSK LAGOS',
                imoNumber: '9456781',
                speed: 0, // Docked
                heading: 180,
                seaState: 'Calm',
                satelliteStatus: 'ACTIVE',
                telemetryLogs: [
                    { status: 'Arrived', location: 'Lagos Anchor', timestamp: new Date() }
                ],
                clientId: 'user_2rxMq9...'
            }
        ], { ignoreDuplicates: true });
        console.log('✅ Shipments seeded.');

        // Seed Invoices
        console.log('🔄 Seeding Invoices...');
        await Invoice.bulkCreate([
            {
                invoiceNumber: 'INV-2026-001',
                amount: 3450.00,
                currency: 'USD',
                status: 'Pending',
                dueDate: new Date('2026-10-24'),
                clientId: 'user_2rxMq9...'
            },
            {
                invoiceNumber: 'INV-2026-002',
                amount: 1200.00,
                currency: 'USD',
                status: 'Paid',
                dueDate: new Date('2026-10-01'),
                clientId: 'user_2rxMq9...'
            }
        ], { ignoreDuplicates: true });
        console.log('✅ Invoices seeded.');

        // Seed Tickets
        console.log('🔄 Seeding Support Tickets...');
        await SupportTicket.bulkCreate([
            {
                ticketNumber: 'TKT-9921',
                subject: 'Customs Clearance Delay on #MR-774102-EU',
                status: 'In-Progress',
                priority: 'High',
                clientId: 'user_2rxMq9...'
            }
        ], { ignoreDuplicates: true });
        console.log('✅ Tickets seeded.');

        console.log('\n🚀 Trade & Client Portal DB Ready!');
        process.exit(0);

    } catch (error) {
        console.error('❌ Setup failed:', error);
        process.exit(1);
    }
}

setupTradeDB();
