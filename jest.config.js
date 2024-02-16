module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test-setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "e2e-tests"]
};
