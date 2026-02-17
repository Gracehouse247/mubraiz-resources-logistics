-- Mubraiz Resources Limited | MySQL Grid Schema
-- Import this via phpMyAdmin into the 'mubraizr_logistics' database.

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET TIME_ZONE = "+00:00";

--
-- Table structure for table `Drivers`
--

CREATE TABLE IF NOT EXISTS `Drivers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `licenseNumber` varchar(255) DEFAULT NULL,
  `licenseExpiry` datetime DEFAULT NULL,
  `safetyScore` float DEFAULT 100,
  `status` enum('active', 'on_leave', 'terminated') DEFAULT 'active',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `Vehicles`
--

CREATE TABLE IF NOT EXISTS `Vehicles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `plateNumber` varchar(255) NOT NULL,
  `make` varchar(255) DEFAULT NULL,
  `model` varchar(255) DEFAULT NULL,
  `year` int(11) DEFAULT NULL,
  `vin` varchar(255) DEFAULT NULL,
  `deviceId` varchar(255) DEFAULT NULL,
  `fuelCapacity` float DEFAULT NULL,
  `currentMileage` int(11) DEFAULT 0,
  `lastServiceMileage` int(11) DEFAULT 0,
  `nextServiceDue` datetime DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `status` enum('Active', 'Maintenance', 'Offline') DEFAULT 'Offline',
  `assignedDriverId` int(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `plateNumber` (`plateNumber`),
  KEY `assignedDriverId` (`assignedDriverId`),
  CONSTRAINT `vehicles_ibfk_1` FOREIGN KEY (`assignedDriverId`) REFERENCES `Drivers` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `Shipments`
--

CREATE TABLE IF NOT EXISTS `Shipments` (
  `id` varchar(255) NOT NULL,
  `origin` varchar(255) NOT NULL,
  `destination` varchar(255) NOT NULL,
  `clientName` varchar(255) NOT NULL,
  `status` enum('Booked', 'In-Transit', 'Customs', 'Delivered', 'Delayed') DEFAULT 'Booked',
  `currentLocation` varchar(255) DEFAULT NULL,
  `telemetryLogs` json DEFAULT NULL,
  `estimatedDelivery` datetime NOT NULL,
  `vesselName` varchar(255) DEFAULT NULL,
  `imoNumber` varchar(255) DEFAULT NULL,
  `mmsi` varchar(255) DEFAULT NULL,
  `speed` float DEFAULT NULL,
  `heading` float DEFAULT NULL,
  `seaState` varchar(255) DEFAULT NULL,
  `satelliteStatus` varchar(255) DEFAULT 'ACTIVE (L-BAND)',
  `clientId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `Invoices`
--

CREATE TABLE IF NOT EXISTS `Invoices` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `invoiceNumber` varchar(255) NOT NULL,
  `amount` decimal(15,2) NOT NULL,
  `status` enum('Paid', 'Pending', 'Overdue') DEFAULT 'Pending',
  `dueDate` datetime NOT NULL,
  `clientId` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `invoiceNumber` (`invoiceNumber`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `ProcurementRequests`
--

CREATE TABLE IF NOT EXISTS `ProcurementRequests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) DEFAULT 'Sourcing Brief',
  `item` varchar(255) NOT NULL,
  `details` text DEFAULT NULL,
  `status` enum('New', 'Processing', 'Sourced', 'Closed') DEFAULT 'New',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `AuditLogs`
--

CREATE TABLE IF NOT EXISTS `AuditLogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(255) NOT NULL,
  `intel` json DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `Vendors`
--

CREATE TABLE IF NOT EXISTS `Vendors` (
  `id` varchar(255) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `industry` varchar(255) NOT NULL,
  `status` enum('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
  `documents` json DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `Assets`
--

CREATE TABLE IF NOT EXISTS `Assets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fileName` varchar(255) NOT NULL,
  `fileUrl` varchar(255) NOT NULL,
  `fileType` varchar(255) DEFAULT NULL,
  `uploadedBy` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT 'General',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `Messages`
--

CREATE TABLE IF NOT EXISTS `Messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `senderId` varchar(255) NOT NULL,
  `recipientId` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `isRead` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `Posts`
--

CREATE TABLE IF NOT EXISTS `Posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text NOT NULL,
  `author` varchar(255) DEFAULT NULL,
  `status` enum('Draft', 'Published', 'Archived') DEFAULT 'Draft',
  `publishedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `SupportTickets`
--

CREATE TABLE IF NOT EXISTS `SupportTickets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `subject` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `status` enum('Open', 'In Progress', 'Resolved', 'Closed') DEFAULT 'Open',
  `priority` enum('Low', 'Medium', 'High', 'Critical') DEFAULT 'Medium',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `GPSLogs`
--

CREATE TABLE IF NOT EXISTS `GPSLogs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicleId` int(11) DEFAULT NULL,
  `latitude` float NOT NULL,
  `longitude` float NOT NULL,
  `speed` float DEFAULT 0,
  `heading` float DEFAULT NULL,
  `altitude` float DEFAULT NULL,
  `timestamp` datetime NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vehicleId` (`vehicleId`),
  CONSTRAINT `gpslogs_ibfk_1` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `Geofences`
--

CREATE TABLE IF NOT EXISTS `Geofences` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `type` enum('Circle', 'Polygon') DEFAULT 'Circle',
  `coordinates` json NOT NULL,
  `radius` float DEFAULT NULL,
  `isActive` tinyint(1) DEFAULT 1,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `Alerts`
--

CREATE TABLE IF NOT EXISTS `Alerts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `vehicleId` int(11) DEFAULT NULL,
  `type` enum('Speeding', 'Geofence Breach', 'Maintenance Due', 'Low Fuel', 'Other') NOT NULL,
  `severity` enum('Low', 'Medium', 'High', 'Critical') DEFAULT 'Medium',
  `message` text NOT NULL,
  `isResolved` tinyint(1) DEFAULT 0,
  `resolvedAt` datetime DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `vehicleId` (`vehicleId`),
  CONSTRAINT `alerts_ibfk_1` FOREIGN KEY (`vehicleId`) REFERENCES `Vehicles` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Table structure for table `ContactSubmissions`
--

CREATE TABLE IF NOT EXISTS `ContactSubmissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `subject` varchar(255) DEFAULT NULL,
  `message` text NOT NULL,
  `status` enum('New', 'Read', 'Responded') DEFAULT 'New',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

COMMIT;
