export interface CaseStudy {
    id: number;
    title: string;
    slug: string;
    category: string;
    region: string;
    challenge: string;
    solution: string;
    implementation: string;
    duration: string;
    clientType: string;
    impact: string;
    stats: { label: string; value: string }[];
    outcomes: { label: string; value: string }[];
    testimonial: { text: string; author: string; role: string };
    image: string;
    accentImage?: string;
    partnerLogo?: string;
}

export const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "Tunjex Integrated: Strategic Supply Chain Optimization",
        slug: "tunjex-integrated-supply-chain",
        category: "Haulage",
        region: "South-West & Northern Nigeria",
        challenge: "Tunjex Integrated Limited faced complex logistical bottlenecks in their cross-regional supply chain, specifically in the timely movement of intermediate industrial goods between Lagos and Kano. They required a partner capable of executing precision scheduled deliveries while maintaining strict cargo integrity.",
        solution: "Mubraiz Resources engineered a dedicated logistical corridor for Tunjex, deploying a specialized fleet of Euro-4 standard trucks with advanced telemetry. We implemented a 'rolling warehouse' concept that synchronized transport schedules exactly with their production needs, effectively reducing their inventory holding costs.",
        implementation: "We established a dedicated fleet operation with 24/7 monitoring capabilities. Our team integrated directly with Tunjex's inventory systems to automate dispatch requests. Checkpoints were established at key transit nodes to ensure rapid driver changeovers and continuous movement, cutting transit times by 35%.",
        duration: "Ongoing Partnership (3+ Years)",
        clientType: "Industrial Manufacturing & Trade",
        impact: "35% Faster",
        stats: [
            { label: "Transit Time", value: "-35%" },
            { label: "Dedicated Fleet", value: "25+ Units" },
            { label: "Cargo Safety", value: "100%" }
        ],
        outcomes: [
            { label: "Transit Time Reduction", value: "35%" },
            { label: "Inventory Cost Savings", value: "15%" },
            { label: "Delivery Reliability", value: "99.5%" },
            { label: "Supply Chain Visibility", value: "100%" }
        ],
        testimonial: {
            text: "Mubraiz Resources transformed our logistics from a cost center into a strategic advantage. Their precision and reliability have allowed us to optimize our production schedules with total confidence.",
            author: "Tunjex Integrated Limited",
            role: "Head of Operations"
        },
        image: "/partners/4.png",
        partnerLogo: "/partners/4.png"
    },
    {
        id: 2,
        title: "TGI Distri: Strategic Logistics Partnership",
        slug: "tgi-distri-logistics-partnership",
        category: "Supply Chain",
        region: "Nationwide Nigeria",
        challenge: "TGI Distri needed a logistics partner capable of handling the nationwide distribution of their wide array of products with efficiency and reliability. The challenge included managing high-volume distribution across 200+ active routes, ensuring timely delivery of 15,000+ monthly shipments, and maintaining product quality across diverse product categories including perishables and fragile items.",
        solution: "Mubraiz Resources implemented an integrated supply chain solution featuring advanced route optimization, real-time tracking systems, and dedicated account management. We deployed a mixed fleet strategy combining heavy-duty trucks for bulk transport and smaller vehicles for last-mile delivery, all coordinated through our centralized command center.",
        implementation: "Our team established 200+ optimized delivery routes covering all major Nigerian cities and towns. We integrated our systems with TGI Distri's inventory management platform for seamless order processing and real-time visibility. Strategic partnerships with local distribution agents in remote areas ensured comprehensive market coverage while maintaining service quality standards.",
        duration: "Ongoing Partnership (4+ Years)",
        clientType: "Distribution & Wholesale",
        impact: "97% Efficiency",
        stats: [
            { label: "Active Routes", value: "200+" },
            { label: "Monthly Deliveries", value: "15,000+" },
            { label: "On-Time Rate", value: "97%" }
        ],
        outcomes: [
            { label: "Route Optimization", value: "200+ Routes" },
            { label: "Monthly Shipment Volume", value: "15,000+" },
            { label: "On-Time Delivery Efficiency", value: "97%" },
            { label: "Fuel Cost Reduction", value: "24%" }
        ],
        testimonial: {
            text: "Mubraiz Resources serves as the linchpin in ensuring our products reach every corner of the nation in a timely manner. Their efficient and reliable services have been instrumental to our growth.",
            author: "TGI Distri",
            role: "Strategic Distribution Partner"
        },
        image: "/images/fleet/TGI truck.jpeg",
        partnerLogo: "/partners/5.png"
    },
    {
        id: 3,
        title: "Chi Limited: Transformative Fleet Partnership",
        slug: "chi-limited-fleet-expansion",
        category: "Haulage",
        region: "Nationwide Nigeria",
        challenge: "In 2021, Chi Limited (Chivita) sought a logistics partner to support their expanding distribution needs. Starting with a modest requirement for 5 vehicles, they needed a partner who could demonstrate reliability, scalability, and operational excellence. The challenge was to prove our capabilities with limited initial resources while positioning for future growth.",
        solution: "Mubraiz Resources initiated the partnership by deploying a carefully selected fleet of 5 trucks with our most experienced drivers and dedicated support team. We implemented rigorous performance monitoring, proactive maintenance schedules, and real-time reporting systems to demonstrate our commitment to excellence from day one.",
        implementation: "Our approach focused on exceeding expectations at every touchpoint. We assigned a dedicated account manager, implemented 24/7 GPS tracking with client portal access, and maintained a 99.9% on-time delivery rate. Regular performance reviews and transparent communication built trust and demonstrated our scalability potential. Within 18 months, the partnership expanded from 5 to 25+ vehicles.",
        duration: "Since 2021 (3+ Years)",
        clientType: "FMCG - Beverage & Food Manufacturing",
        impact: "400% Growth",
        stats: [
            { label: "Fleet Growth", value: "400%" },
            { label: "Commended", value: "Official" },
            { label: "Since", value: "2021" }
        ],
        outcomes: [
            { label: "Fleet Expansion", value: "5 to 25+ Vehicles" },
            { label: "Service Reliability", value: "99.9%" },
            { label: "Official Commendation", value: "Received" },
            { label: "Partnership Duration", value: "3+ Years" }
        ],
        testimonial: {
            text: "What began as a modest logistics partnership quickly transformed into a resounding success. The management at Chi Limited was sufficiently impressed with our services, prompting them to issue a commendation and express their desire for a deeper and more extensive partnership.",
            author: "Chi Limited (Chivita)",
            role: "Large-Scale Fleet Management Partner"
        },
        image: "/images/fleet/reliability-truck.jpeg",
        partnerLogo: "/partners/1.png"
    },
    {
        id: 4,
        title: "Nigerian Sinotrucks: Fleet Maintenance Excellence",
        slug: "sinotrucks-maintenance-partnership",
        category: "Supply Chain",
        region: "Ibafo, Ogun State",
        challenge: "Maintaining a fleet of 520+ heavy-duty vehicles requires specialized technical expertise, genuine parts availability, and rapid response capabilities. Mubraiz Resources needed a maintenance partner who could ensure our fleet consistently operates at optimal capacity while minimizing downtime and extending vehicle lifespan.",
        solution: "We established a robust Service Retainership Agreement with Nigerian Sinotrucks Limited, delineating a comprehensive framework for delivering full repair and maintenance services. This partnership ensures access to factory-trained technicians, genuine OEM parts, and priority service scheduling for our entire Sinotrucks fleet.",
        implementation: "The partnership includes preventive maintenance schedules every 5,000km, 42-point inspections after every long-haul journey, and emergency breakdown support with guaranteed 4-hour response times. Nigerian Sinotrucks maintains a dedicated parts inventory at our Ibafo facility, reducing repair turnaround times by 60%. Their technical team conducts quarterly fleet audits and driver training sessions on vehicle care.",
        duration: "Ongoing Partnership (6+ Years)",
        clientType: "Fleet Maintenance & Technical Services",
        impact: "Zero-Failure",
        stats: [
            { label: "Fleet Size", value: "520+" },
            { label: "Uptime", value: "99.8%" },
            { label: "Response Time", value: "4HR" }
        ],
        outcomes: [
            { label: "Fleet Availability", value: "99.8%" },
            { label: "Maintenance Cost Reduction", value: "28%" },
            { label: "Vehicle Lifespan Extension", value: "+40%" },
            { label: "Breakdown Response Time", value: "4 Hours" }
        ],
        testimonial: {
            text: "Nigerian Sinotrucks Limited's unwavering dedication to maintaining our vehicles reflects their commitment to our success. This collaboration ensures that our fleet consistently operates at its optimal capacity.",
            author: "Mubraiz Resources",
            role: "Fleet Operations Management"
        },
        image: "/partners/8.png",
        partnerLogo: "/partners/8.png"
    },
    {
        id: 5,
        title: "Gambus Energy: Advanced Fleet Tracking Solutions",
        slug: "gambus-energy-tracking-solutions",
        category: "Supply Chain",
        region: "Nationwide Operations",
        challenge: "Managing a large fleet across Nigeria's challenging terrain requires real-time visibility, fuel accountability, and route optimization. Mubraiz Resources needed a comprehensive tracking solution that could provide precision monitoring, prevent fuel theft, and optimize operational efficiency across our entire fleet.",
        solution: "Gambus Energy Ltd. deployed their comprehensive truck and diesel tracking solutions across our entire fleet. The system integrates GPS tracking, fuel monitoring sensors, driver behavior analytics, and geofencing capabilities into a unified platform accessible via web and mobile applications.",
        implementation: "Installation of dual-mode (Satellite/GSM) GPS trackers on all 520+ vehicles ensures uninterrupted tracking even in remote areas. Fuel sensors monitor consumption patterns and detect anomalies in real-time. The system generates automated alerts for route deviations, excessive idling, harsh driving, and unauthorized stops. Integration with our dispatch system enables dynamic route optimization based on real-time traffic and weather data.",
        duration: "Ongoing Partnership (4+ Years)",
        clientType: "Fleet Technology & Fuel Management",
        impact: "95% Accuracy",
        stats: [
            { label: "Fleet Coverage", value: "100%" },
            { label: "ETA Accuracy", value: "95%" },
            { label: "Fuel Savings", value: "18%" }
        ],
        outcomes: [
            { label: "Real-Time Tracking Coverage", value: "100%" },
            { label: "Fuel Theft Prevention", value: "92%" },
            { label: "Route Optimization Savings", value: "18%" },
            { label: "ETA Prediction Accuracy", value: "95%" }
        ],
        testimonial: {
            text: "With precision and reliability, Gambus Energy streamlines our operations, ensuring efficient fleet management and fuel accountability, driving our success forward.",
            author: "Mubraiz Resources",
            role: "Fleet Technology Integration"
        },
        image: "/partners/6.png",
        partnerLogo: "/partners/6.png"
    },
    {
        id: 6,
        title: "West African Tire Services: Tire Management Excellence",
        slug: "wats-tire-management",
        category: "Supply Chain",
        region: "Nationwide Nigeria",
        challenge: "Tire management is critical for fleet safety, operational efficiency, and cost control. With 520+ vehicles, Mubraiz Resources required a partner who could provide top-quality tires, expert maintenance, and proactive monitoring to maximize tire lifespan while ensuring safety across diverse operating conditions.",
        solution: "West African TIRE Services (WATS) became our premier supplier for top-quality tires and expert tire management solutions. Their comprehensive service includes tire selection consultation, installation, rotation schedules, pressure monitoring, and performance analytics to optimize tire performance across our fleet.",
        implementation: "WATS established a tire management program featuring quarterly inspections, pressure optimization protocols, and rotation schedules tailored to each vehicle's usage pattern. They maintain a dedicated inventory of our most-used tire specifications at our Ibafo facility for rapid replacement. Their mobile service units conduct on-site emergency repairs and replacements, minimizing vehicle downtime. Advanced tire monitoring systems track wear patterns and predict replacement needs.",
        duration: "Ongoing Partnership (5+ Years)",
        clientType: "Tire Supply & Management Services",
        impact: "Safety First",
        stats: [
            { label: "Fleet Coverage", value: "520+" },
            { label: "Safety Rating", value: "99.9%" },
            { label: "Tire Life", value: "+35%" }
        ],
        outcomes: [
            { label: "Tire-Related Incidents", value: "-98%" },
            { label: "Tire Lifespan Extension", value: "+35%" },
            { label: "Fuel Efficiency Improvement", value: "8%" },
            { label: "Tire Cost Reduction", value: "22%" }
        ],
        testimonial: {
            text: "WATS' meticulous oversight ensures optimal tire performance, enhancing safety and efficiency across our operations, setting the standard for reliability in the industry.",
            author: "Mubraiz Resources",
            role: "Fleet Safety & Maintenance"
        },
        image: "/partners/3.png",
        partnerLogo: "/partners/3.png"
    },
    {
        id: 7,
        title: "Zenith Bank PLC: Financial Partnership Excellence",
        slug: "zenith-bank-financial-partnership",
        category: "Supply Chain",
        region: "Nigeria",
        challenge: "Managing financial transactions for a large-scale logistics operation requires a banking partner with robust infrastructure, digital capabilities, and deep understanding of the logistics industry. Mubraiz Resources needed seamless payment processing, trade finance solutions, and financial stability support to facilitate smooth operations.",
        solution: "Zenith Bank Plc serves as our trusted banking partner, providing comprehensive financial services including corporate accounts management, trade finance facilities, payroll processing, and digital payment solutions. Their expertise in logistics sector financing and commitment to excellence align perfectly with our operational requirements.",
        implementation: "Zenith Bank established dedicated relationship managers for our account, implemented automated payment systems for vendor settlements, and provided trade finance facilities for equipment acquisition. Their digital banking platform enables real-time transaction monitoring and multi-level approval workflows. The partnership includes specialized services such as fleet financing, fuel card programs, and foreign exchange management for international transactions.",
        duration: "Ongoing Partnership (7+ Years)",
        clientType: "Banking & Financial Services",
        impact: "Financial Stability",
        stats: [
            { label: "Partnership", value: "7+ Years" },
            { label: "Transactions", value: "24/7" },
            { label: "Support", value: "Dedicated" }
        ],
        outcomes: [
            { label: "Transaction Processing Speed", value: "+60%" },
            { label: "Payment Accuracy", value: "99.99%" },
            { label: "Trade Finance Access", value: "Enhanced" },
            { label: "Digital Banking Adoption", value: "100%" }
        ],
        testimonial: {
            text: "Zenith Bank Plc plays a pivotal role in facilitating our financial transactions and supporting our financial stability. Their expertise and commitment to excellence in financial services underscore their significance in our operational success.",
            author: "Mubraiz Resources",
            role: "Financial Operations"
        },
        image: "/partners/2.png",
        partnerLogo: "/partners/2.png"
    }
];
