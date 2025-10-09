const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ga2geq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
