const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

console.log('--- Environment Variable Audit ---');
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD ? '******** (Set)' : 'Not Set');
console.log('---------------------------------');

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST || 'localhost',
        dialect: 'mysql',
        logging: console.log, // Enable logging for diagnostics
    }
);

async function runDiagnostics() {
    try {
        console.log('\n🔍 Attempting to authenticate with Database...');
        await sequelize.authenticate();
        console.log('✅ Success: Database connection established.');

        console.log('\n🔍 Attempting to sync models (Dry Run/Schema Check)...');
        // We just check if we can query some base info
        const [results] = await sequelize.query("SHOW TABLES;");
        console.log('✅ Success: Tables identified in Database:');
        console.log(results);

    } catch (error) {
        console.error('\n❌ Diagnostic Failure:');
        console.error('Error Code:', error.parent ? error.parent.code : error.name);
        console.error('Message:', error.message);

        if (error.parent && error.parent.code === 'ER_ACCESS_DENIED_ERROR') {
            console.error('\n💡 Tip: Check if the DB_USER and DB_PASSWORD match cPanel exactly.');
        }
        if (error.parent && error.parent.code === 'ER_BAD_DB_ERROR') {
            console.error('\n💡 Tip: The database name might be incorrect. (Check mubraiz_ vs mubraizr_ prefix)');
        }
    } finally {
        await sequelize.close();
        process.exit();
    }
}

runDiagnostics();
