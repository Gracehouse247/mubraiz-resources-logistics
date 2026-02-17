/**
 * Database Setup Script for Fleet Management System
 * Run this to create all necessary tables and seed initial data
 */

require('dotenv').config();
const { sequelize } = require('../config/db');
const Vehicle = require('../models/Vehicle');
const Driver = require('../models/Driver');
const GPSLog = require('../models/GPSLog');
const Geofence = require('../models/Geofence');
const Alert = require('../models/Alert');

async function setupDatabase() {
    try {
        console.log('🔄 Connecting to database...');
        console.log(`   Host: ${process.env.DB_HOST}`);
        console.log(`   Database: ${process.env.DB_NAME}`);
        console.log(`   User: ${process.env.DB_USER}`);

        await sequelize.authenticate();
        console.log('✅ Database connected successfully\n');

        console.log('🔄 Creating tables...');

        // Sync database (create tables if they don't exist)
        await sequelize.sync({ force: false, alter: true });

        console.log('✅ All tables created successfully\n');

        // Seed initial data
        console.log('🔄 Seeding initial data...');

        // Create sample drivers
        const drivers = await Driver.bulkCreate([
            {
                firstName: 'Adebayo',
                lastName: 'Okonkwo',
                email: 'adebayo.okonkwo@mubraiz.com',
                phone: '+234 801 234 5678',
                licenseNumber: 'LAG-2024-001',
                licenseExpiry: new Date('2026-12-31'),
                safetyScore: 95.5,
                status: 'active'
            },
            {
                firstName: 'Chioma',
                lastName: 'Nwankwo',
                email: 'chioma.nwankwo@mubraiz.com',
                phone: '+234 802 345 6789',
                licenseNumber: 'LAG-2024-002',
                licenseExpiry: new Date('2027-06-30'),
                safetyScore: 88.2,
                status: 'active'
            },
            {
                firstName: 'Ibrahim',
                lastName: 'Mohammed',
                email: 'ibrahim.mohammed@mubraiz.com',
                phone: '+234 803 456 7890',
                licenseNumber: 'LAG-2024-003',
                licenseExpiry: new Date('2026-09-15'),
                safetyScore: 92.7,
                status: 'active'
            },
            {
                firstName: 'Funke',
                lastName: 'Adeyemi',
                email: 'funke.adeyemi@mubraiz.com',
                phone: '+234 804 567 8901',
                licenseNumber: 'LAG-2024-004',
                licenseExpiry: new Date('2027-03-20'),
                safetyScore: 97.1,
                status: 'active'
            },
            {
                firstName: 'Emeka',
                lastName: 'Okafor',
                email: 'emeka.okafor@mubraiz.com',
                phone: '+234 805 678 9012',
                licenseNumber: 'LAG-2024-005',
                licenseExpiry: new Date('2026-11-10'),
                safetyScore: 85.3,
                status: 'active'
            }
        ]);

        console.log(`✅ Created ${drivers.length} sample drivers`);

        // Create sample vehicles
        const vehicles = await Vehicle.bulkCreate([
            {
                plateNumber: 'MUB-001-LA',
                make: 'Mercedes-Benz',
                model: 'Actros',
                year: 2023,
                vin: '1HGBH41JXMN109186',
                deviceId: 'GPS-DEVICE-001',
                fuelCapacity: 400,
                currentMileage: 15420,
                lastServiceMileage: 15000,
                nextServiceDue: new Date('2026-04-01'),
                status: 'offline',
                assignedDriverId: drivers[0].id
            },
            {
                plateNumber: 'MUB-002-LA',
                make: 'Volvo',
                model: 'FH16',
                year: 2022,
                vin: '2HGBH41JXMN109187',
                deviceId: 'GPS-DEVICE-002',
                fuelCapacity: 380,
                currentMileage: 28750,
                lastServiceMileage: 28000,
                nextServiceDue: new Date('2026-03-15'),
                status: 'offline',
                assignedDriverId: drivers[1].id
            },
            {
                plateNumber: 'MUB-003-LA',
                make: 'Scania',
                model: 'R500',
                year: 2023,
                vin: '3HGBH41JXMN109188',
                deviceId: 'GPS-DEVICE-003',
                fuelCapacity: 420,
                currentMileage: 12300,
                lastServiceMileage: 12000,
                nextServiceDue: new Date('2026-05-20'),
                status: 'offline',
                assignedDriverId: drivers[2].id
            },
            {
                plateNumber: 'MUB-004-LA',
                make: 'MAN',
                model: 'TGX',
                year: 2021,
                vin: '4HGBH41JXMN109189',
                deviceId: 'GPS-DEVICE-004',
                fuelCapacity: 390,
                currentMileage: 45600,
                lastServiceMileage: 45000,
                nextServiceDue: new Date('2026-02-28'),
                status: 'offline',
                assignedDriverId: drivers[3].id
            },
            {
                plateNumber: 'MUB-005-LA',
                make: 'DAF',
                model: 'XF',
                year: 2022,
                vin: '5HGBH41JXMN109190',
                deviceId: 'GPS-DEVICE-005',
                fuelCapacity: 410,
                currentMileage: 32100,
                lastServiceMileage: 32000,
                nextServiceDue: new Date('2026-04-10'),
                status: 'offline',
                assignedDriverId: drivers[4].id
            }
        ]);

        console.log(`✅ Created ${vehicles.length} sample vehicles`);

        // Create sample geofences
        const geofences = await Geofence.bulkCreate([
            {
                name: 'Lagos Headquarters',
                type: 'circle',
                coordinates: {
                    lat: 6.5244,
                    lng: 3.3792,
                    radius: 500  // 500 meters
                },
                color: '#a1dc84',
                alertOnEntry: true,
                alertOnExit: true,
                status: 'active'
            },
            {
                name: 'Apapa Port Zone',
                type: 'circle',
                coordinates: {
                    lat: 6.4474,
                    lng: 3.3700,
                    radius: 1000  // 1 km
                },
                color: '#3b82f6',
                alertOnEntry: true,
                alertOnExit: true,
                status: 'active'
            },
            {
                name: 'Ikeja Warehouse',
                type: 'circle',
                coordinates: {
                    lat: 6.5774,
                    lng: 3.3515,
                    radius: 300  // 300 meters
                },
                color: '#f59e0b',
                alertOnEntry: true,
                alertOnExit: false,
                status: 'active'
            }
        ]);

        console.log(`✅ Created ${geofences.length} sample geofences`);

        console.log('\n✅ Database setup completed successfully!');
        console.log('\n📋 Summary:');
        console.log(`   - Drivers: ${drivers.length}`);
        console.log(`   - Vehicles: ${vehicles.length}`);
        console.log(`   - Geofences: ${geofences.length}`);
        console.log('\n🚀 You can now:');
        console.log('   1. Start the backend: npm start');
        console.log('   2. Access the API: https://api.mubraizresourcesltd.com');
        console.log('   3. View the dashboard: https://mubraizresourcesltd.com/portal/fleet\n');

        process.exit(0);
    } catch (error) {
        console.error('❌ Database setup failed:', error);
        console.error('\nError details:', error.message);
        process.exit(1);
    }
}

setupDatabase();
