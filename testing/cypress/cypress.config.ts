import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    excludeSpecPattern: [],
    experimentalSessionAndOrigin: true,
    retries: { runMode: 1, openMode: 0 },
    setupNodeEvents(on, config) {},
    slowTestThreshold: 10000,
    specPattern: "cypress/specs/**/*.spec.ts",
    supportFile: "cypress/support/index.ts",
  },
});
