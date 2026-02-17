SET FOREIGN_KEY_CHECKS = 0;

-- 1. Shipments Table
DROP TABLE IF EXISTS `Shipments`;
CREATE TABLE `Shipments` (
  `id` VARCHAR(255) NOT NULL,
  `origin` VARCHAR(255) NOT NULL,
  `destination` VARCHAR(255) NOT NULL,
  `clientName` VARCHAR(255) NOT NULL,
  `status` ENUM('Booked', 'In-Transit', 'Customs', 'Delivered', 'Delayed') DEFAULT 'Booked',
  `currentLocation` VARCHAR(255) DEFAULT NULL,
  `telemetryLogs` JSON DEFAULT NULL,
  `estimatedDelivery` DATETIME NOT NULL,
  `vesselName` VARCHAR(255) DEFAULT NULL,
  `imoNumber` VARCHAR(255) DEFAULT NULL,
  `mmsi` VARCHAR(255) DEFAULT NULL,
  `speed` FLOAT DEFAULT NULL,
  `heading` FLOAT DEFAULT NULL,
  `seaState` VARCHAR(255) DEFAULT NULL,
  `satelliteStatus` VARCHAR(255) DEFAULT 'ACTIVE (L-BAND)',
  `clientId` VARCHAR(255) DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 2. Vehicles Table
DROP TABLE IF EXISTS `vehicles`;
CREATE TABLE `vehicles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `plateNumber` VARCHAR(20) NOT NULL UNIQUE,
  `make` VARCHAR(50) NOT NULL,
  `model` VARCHAR(50) NOT NULL,
  `year` INT DEFAULT NULL,
  `vin` VARCHAR(17) UNIQUE DEFAULT NULL,
  `deviceId` VARCHAR(50) UNIQUE DEFAULT NULL,
  `status` ENUM('active', 'idle', 'maintenance', 'offline') DEFAULT 'offline',
  `fuelCapacity` DECIMAL(10,2) DEFAULT NULL,
  `currentMileage` DECIMAL(10,2) DEFAULT '0.00',
  `lastServiceMileage` DECIMAL(10,2) DEFAULT '0.00',
  `nextServiceDue` DATETIME DEFAULT NULL,
  `assignedDriverId` INT DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 3. Drivers Table
DROP TABLE IF EXISTS `drivers`;
CREATE TABLE `drivers` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(50) NOT NULL,
  `lastName` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) UNIQUE DEFAULT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `licenseNumber` VARCHAR(50) NOT NULL UNIQUE,
  `licenseExpiry` DATETIME NOT NULL,
  `safetyScore` DECIMAL(5,2) DEFAULT '100.00',
  `totalTrips` INT DEFAULT 0,
  `harshBrakingCount` INT DEFAULT 0,
  `rapidAccelerationCount` INT DEFAULT 0,
  `overspeedingCount` INT DEFAULT 0,
  `status` ENUM('active', 'inactive', 'suspended') DEFAULT 'active',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 4. GPS Logs Table
DROP TABLE IF EXISTS `gps_logs`;
CREATE TABLE `gps_logs` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `vehicleId` INT NOT NULL,
  `latitude` DECIMAL(10,8) NOT NULL,
  `longitude` DECIMAL(11,8) NOT NULL,
  `speed` DECIMAL(6,2) DEFAULT NULL,
  `heading` DECIMAL(5,2) DEFAULT NULL,
  `altitude` DECIMAL(8,2) DEFAULT NULL,
  `fuelLevel` DECIMAL(5,2) DEFAULT NULL,
  `engineStatus` ENUM('on', 'off', 'idle') DEFAULT 'off',
  `timestamp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `accuracy` DECIMAL(6,2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  FOREIGN KEY (`vehicleId`) REFERENCES `vehicles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 5. Alerts Table
DROP TABLE IF EXISTS `alerts`;
CREATE TABLE `alerts` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `vehicleId` INT NOT NULL,
  `type` ENUM('overspeeding', 'geofence_entry', 'geofence_exit', 'harsh_braking', 'rapid_acceleration', 'power_cut', 'sos', 'vibration', 'fuel_theft', 'idle_excessive', 'maintenance_due', 'low_fuel', 'engine_immobilized') NOT NULL,
  `severity` ENUM('low', 'medium', 'high', 'critical') DEFAULT 'medium',
  `message` TEXT NOT NULL,
  `metadata` JSON DEFAULT NULL,
  `acknowledged` TINYINT(1) DEFAULT 0,
  `acknowledgedBy` VARCHAR(100) DEFAULT NULL,
  `acknowledgedAt` DATETIME DEFAULT NULL,
  `timestamp` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 6. Geofences Table
DROP TABLE IF EXISTS `geofences`;
CREATE TABLE `geofences` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `type` ENUM('circle', 'polygon') NOT NULL,
  `coordinates` JSON NOT NULL,
  `color` VARCHAR(7) DEFAULT '#a1dc84',
  `alertOnEntry` TINYINT(1) DEFAULT 1,
  `alertOnExit` TINYINT(1) DEFAULT 1,
  `status` ENUM('active', 'inactive') DEFAULT 'active',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 7. Assets Table
DROP TABLE IF EXISTS `Assets`;
CREATE TABLE `Assets` (
  `id` CHAR(36) NOT NULL,
  `fileName` VARCHAR(255) NOT NULL,
  `originalName` VARCHAR(255) NOT NULL,
  `filePath` VARCHAR(255) NOT NULL,
  `mimeType` VARCHAR(255) NOT NULL,
  `size` INT NOT NULL,
  `category` VARCHAR(255) DEFAULT 'general',
  `uploadedBy` VARCHAR(255) NOT NULL,
  `accessLevel` ENUM('public', 'internal', 'private') DEFAULT 'internal',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 8. Procurement Requests
DROP TABLE IF EXISTS `ProcurementRequests`;
CREATE TABLE `ProcurementRequests` (
  `id` CHAR(36) NOT NULL,
  `companyName` VARCHAR(255) NOT NULL,
  `contactName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `phoneNumber` VARCHAR(255) DEFAULT NULL,
  `serviceType` ENUM('Strategic Sourcing', 'Inventory Orchestration', 'Vendor Management', 'Risk & Compliance', 'Direct Procurement') NOT NULL,
  `estimatedBudget` VARCHAR(255) DEFAULT NULL,
  `projectDescription` TEXT NOT NULL,
  `status` ENUM('New', 'Reviewed', 'In-Progress', 'Quote-Sent', 'Closed') DEFAULT 'New',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 9. Vendors Table
DROP TABLE IF EXISTS `Vendors`;
CREATE TABLE `Vendors` (
  `id` CHAR(36) NOT NULL,
  `companyName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL UNIQUE,
  `phone` VARCHAR(255) NOT NULL,
  `industry` VARCHAR(255) NOT NULL,
  `status` ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
  `documents` JSON DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 10. Contact Submissions
DROP TABLE IF EXISTS `contact_submissions`;
CREATE TABLE `contact_submissions` (
  `id` BIGINT NOT NULL AUTO_INCREMENT,
  `fullName` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `serviceType` VARCHAR(255) NOT NULL,
  `message` TEXT NOT NULL,
  `status` ENUM('New', 'Read', 'Replied', 'Archived') DEFAULT 'New',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 11. Blog Posts
DROP TABLE IF EXISTS `Posts`;
CREATE TABLE `Posts` (
  `id` CHAR(36) NOT NULL,
  `title` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL UNIQUE,
  `content` TEXT NOT NULL,
  `excerpt` TEXT DEFAULT NULL,
  `category` VARCHAR(255) DEFAULT 'General',
  `image` VARCHAR(255) DEFAULT NULL,
  `authorId` VARCHAR(255) NOT NULL,
  `isPublished` TINYINT(1) DEFAULT 0,
  `publishedAt` DATETIME DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 12. Messages
DROP TABLE IF EXISTS `Messages`;
CREATE TABLE `Messages` (
  `id` CHAR(36) NOT NULL,
  `senderId` VARCHAR(255) NOT NULL,
  `senderName` VARCHAR(255) NOT NULL,
  `recipientId` VARCHAR(255) NOT NULL,
  `content` TEXT NOT NULL,
  `type` ENUM('text', 'file', 'system') DEFAULT 'text',
  `status` ENUM('sent', 'delivered', 'read') DEFAULT 'sent',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 13. Support Tickets
DROP TABLE IF EXISTS `SupportTickets`;
CREATE TABLE `SupportTickets` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ticketNumber` VARCHAR(255) NOT NULL UNIQUE,
  `subject` VARCHAR(255) NOT NULL,
  `status` ENUM('Open', 'In-Progress', 'Resolved', 'Closed') DEFAULT 'Open',
  `priority` ENUM('Low', 'Medium', 'High', 'Critical') DEFAULT 'Medium',
  `clientId` VARCHAR(255) DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 14. Invoices
DROP TABLE IF EXISTS `Invoices`;
CREATE TABLE `Invoices` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `invoiceNumber` VARCHAR(255) NOT NULL UNIQUE,
  `amount` DECIMAL(10,2) NOT NULL,
  `currency` VARCHAR(255) DEFAULT 'USD',
  `status` ENUM('Pending', 'Paid', 'Overdue') DEFAULT 'Pending',
  `dueDate` DATETIME NOT NULL,
  `pdfUrl` VARCHAR(255) DEFAULT NULL,
  `clientId` VARCHAR(255) DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

SET FOREIGN_KEY_CHECKS = 1;
