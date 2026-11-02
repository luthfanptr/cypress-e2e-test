const { defineConfig } = require("cypress");

module.exports = defineConfig({
    video: true,
    screenshotOnRunFailure: true,
    screenshotsFolder: "evidences/screenshots",
    videosFolder: "evidences/videos",
    reporter:'cypress-mochawesome-reporter',
    reporterOptions: {
        reportDir: 'evidences/reports',
        reportPageTitle: 'Laporan Pengujian E2E',
        charts: true,
        embeddedScreenshots: true,
        inlineAssets: true,
    },
    e2e: {
        supportFile: "cypress/support/e2e.js",
        specPattern: "cypress/e2e/**/*.cy.js",
        fixturesFolder:"cypress/fixtures",

         defaultCommandTimeout: 10000,
        
        setupNodeEvents(on, config) {
            require('cypress-mochawesome-reporter/plugin')(on);
            return config;
        },
    },
});
