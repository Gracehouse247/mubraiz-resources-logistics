const nodemailer = require('nodemailer');

/**
 * Email Service for Mubraiz Resources
 * Sends email notifications for all form submissions
 */

// Create reusable transporter
const createTransporter = () => {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT || 587,
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD
        }
    });
};

/**
 * Send email notification
 * @param {Object} options - Email options
 * @param {string} options.subject - Email subject
 * @param {string} options.html - Email HTML content
 * @param {string} options.text - Email plain text content (optional)
 */
const sendEmail = async ({ subject, html, text }) => {
    try {
        const transporter = createTransporter();

        const mailOptions = {
            from: `"Mubraiz Resources" <${process.env.SMTP_USER}>`,
            to: 'info@mubraizresourcesltd.com',
            subject: subject,
            html: html,
            text: text || html.replace(/<[^>]*>/g, '') // Strip HTML tags for plain text fallback
        };

        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Email sent successfully:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Email sending failed:', error);
        return { success: false, error: error.message };
    }
};

/**
 * Format contact form submission email
 */
const formatContactEmail = (data) => {
    return {
        subject: `New Contact Form Submission - ${data.serviceType || 'General Inquiry'}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Contact Form Submission
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Name:</strong> ${data.fullName}</p>
                    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                    <p><strong>Service Type:</strong> ${data.serviceType || 'General Inquiry'}</p>
                    <p><strong>Message:</strong></p>
                    <p style="background: white; padding: 15px; border-left: 4px solid #a1dc84; margin: 10px 0;">
                        ${data.message}
                    </p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

/**
 * Format trade audit submission email
 */
const formatTradeAuditEmail = (data) => {
    return {
        subject: `Global Trade Intelligence Audit Request - ${data.sector}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Global Trade Intelligence Audit
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Resource Sector:</strong> ${data.sector}</p>
                    <p><strong>Target Destination:</strong> ${data.destination}</p>
                    <p><strong>Volume/Details:</strong> ${data.volume || 'Not specified'}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

/**
 * Format asset inquiry email
 */
const formatAssetInquiryEmail = (data) => {
    return {
        subject: `Fleet Asset Inquiry - ${data.assetName}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Fleet Asset Inquiry
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Asset:</strong> ${data.assetName}</p>
                    <p><strong>Corporate Entity:</strong> ${data.company}</p>
                    <p><strong>Deployment Zone:</strong> ${data.location}</p>
                    <p><strong>Operational Summary:</strong></p>
                    <p style="background: white; padding: 15px; border-left: 4px solid #a1dc84; margin: 10px 0;">
                        ${data.summary}
                    </p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

/**
 * Format fleet deployment request email
 */
const formatFleetDeploymentEmail = (data) => {
    return {
        subject: `Fleet Deployment Request - ${data.asset}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Fleet Deployment Request
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Asset Classification:</strong> ${data.asset}</p>
                    <p><strong>Operational Location:</strong> ${data.location}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

/**
 * Format haulage quote request email
 */
const formatQuoteEmail = (data) => {
    return {
        subject: `Haulage Quote Request - ${data.cargoType || 'General'}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Haulage Quote Request
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                    <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
                    <p><strong>Cargo Type:</strong> ${data.cargoType || 'Not specified'}</p>
                    <p><strong>Origin:</strong> ${data.origin || 'Not specified'}</p>
                    <p><strong>Destination:</strong> ${data.destination || 'Not specified'}</p>
                    <p><strong>Weight/Volume:</strong> ${data.weight || 'Not specified'}</p>
                    <p><strong>Additional Details:</strong></p>
                    <p style="background: white; padding: 15px; border-left: 4px solid #a1dc84; margin: 10px 0;">
                        ${data.details || 'No additional details provided'}
                    </p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

/**
 * Format site visit request email
 */
const formatSiteVisitEmail = (data) => {
    return {
        subject: `Warehousing Site Visit Request - ${data.company || 'New Inquiry'}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Warehousing Site Visit Request
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Name:</strong> ${data.name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
                    <p><strong>Phone:</strong> ${data.phone || 'Not provided'}</p>
                    <p><strong>Company:</strong> ${data.company || 'Not specified'}</p>
                    <p><strong>Preferred Date:</strong> ${data.preferredDate || 'Not specified'}</p>
                    <p><strong>Requirements:</strong></p>
                    <p style="background: white; padding: 15px; border-left: 4px solid #a1dc84; margin: 10px 0;">
                        ${data.requirements || 'No specific requirements provided'}
                    </p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

/**
 * Format haulage corridor audit email
 */
const formatCorridorAuditEmail = (data) => {
    return {
        subject: `Haulage Corridor Audit - ${data.origin} to ${data.destination}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Haulage Corridor Audit Request
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Port / Pickup Origin:</strong> ${data.origin}</p>
                    <p><strong>Regional Delivery Hub:</strong> ${data.destination}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

/**
 * Format warehousing facility brief email
 */
const formatFacilityBriefEmail = (data) => {
    return {
        subject: `Warehousing Facility Brief - ${data.category}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Warehousing Facility Brief Request
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Storage Category:</strong> ${data.category}</p>
                    <p><strong>Requirements:</strong></p>
                    <p style="background: white; padding: 15px; border-left: 4px solid #a1dc84; margin: 10px 0;">
                        ${data.requirements}
                    </p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

/**
 * Format procurement brief email
 */
const formatProcurementBriefEmail = (data) => {
    return {
        subject: `Procurement Sourcing Brief - ${data.item}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Procurement Sourcing Brief
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Asset Category:</strong> ${data.item}</p>
                    <p><strong>Specifications / Requirements:</strong></p>
                    <p style="background: white; padding: 15px; border-left: 4px solid #a1dc84; margin: 10px 0;">
                        ${data.details}
                    </p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

/**
 * Format customs assessment email
 */
const formatCustomsAssessmentEmail = (data) => {
    return {
        subject: `Customs Compliance Assessment - ${data.category}`,
        html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
                <h2 style="color: #a1dc84; border-bottom: 3px solid #a1dc84; padding-bottom: 10px;">
                    Customs Compliance Check
                </h2>
                <div style="background: #f8faf8; padding: 20px; border-radius: 8px; margin: 20px 0;">
                    <p><strong>Consignment Category:</strong> ${data.category}</p>
                    <p><strong>Estimated Invoice Value:</strong> $${data.value}</p>
                </div>
                <p style="color: #666; font-size: 12px; margin-top: 30px;">
                    Submitted on ${new Date().toLocaleString('en-NG', { timeZone: 'Africa/Lagos' })}
                </p>
            </div>
        `
    };
};

module.exports = {
    sendEmail,
    formatContactEmail,
    formatTradeAuditEmail,
    formatAssetInquiryEmail,
    formatFleetDeploymentEmail,
    formatQuoteEmail,
    formatSiteVisitEmail,
    formatCorridorAuditEmail,
    formatFacilityBriefEmail,
    formatProcurementBriefEmail,
    formatCustomsAssessmentEmail
};
