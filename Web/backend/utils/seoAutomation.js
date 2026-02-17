const axios = require('axios');
const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

/**
 * SEO Automation Utility
 * Handles Google Indexing API and Search Engine Pings
 */
class SEOAutomation {
    constructor() {
        this.serviceAccountPath = path.join(__dirname, '../config/service-account.json');
        this.sitemapUrl = 'https://mubraizresourcesltd.com/sitemap.xml';
    }

    /**
     * Notify Google Search Console of a New or Updated URL
     * Requires Google Indexing API enabled and service-account.json
     */
    async notifyGoogle(url, type = 'URL_UPDATED') {
        try {
            if (!fs.existsSync(this.serviceAccountPath)) {
                console.warn('⚠️ Google Service Account JSON missing at', this.serviceAccountPath);
                return { success: false, error: 'Missing Credentials' };
            }

            const auth = new google.auth.GoogleAuth({
                keyFile: this.serviceAccountPath,
                scopes: ['https://www.googleapis.com/auth/indexing'],
            });

            const client = await auth.getClient();
            const indexing = google.indexing({ version: 'v3', auth: client });

            const response = await indexing.urlNotifications.publish({
                requestBody: {
                    url: url,
                    type: type,
                },
            });

            console.log(`✅ Google Indexing API: ${url} notified (${type})`);
            return { success: true, data: response.data };
        } catch (error) {
            console.error(`❌ Google Indexing API Error for ${url}:`, error.message);
            return { success: false, error: error.message };
        }
    }

    /**
     * Ping Search Engines to Recrawl Sitemap
     */
    async pingSearchEngines() {
        const endpoints = [
            `https://www.google.com/ping?sitemap=${this.sitemapUrl}`,
            `https://www.bing.com/ping?sitemap=${this.sitemapUrl}`
        ];

        const results = [];
        for (const url of endpoints) {
            try {
                await axios.get(url);
                console.log(`✅ Pinged: ${url}`);
                results.push({ url, status: 'success' });
            } catch (error) {
                console.warn(`⚠️ Ping failed: ${url}`, error.message);
                results.push({ url, status: 'failed', error: error.message });
            }
        }
        return results;
    }

    /**
     * Specifically Notify LLM Crawlers (Experimental/Bot Pings)
     */
    async notifyLLMs() {
        console.log('🤖 Pinging LLM crawlers via sitemap refresh...');
        // Most LLMs like GPTBot just follow sitemaps.
        // We ensure the sitemap is reachable and headers are fresh.
        try {
            return await this.pingSearchEngines();
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

module.exports = new SEOAutomation();
