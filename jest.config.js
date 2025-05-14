module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/test-setup.js"],
  testPathIgnorePatterns: ["/node_modules/", "playwright-tests"],
  moduleNameMapper: {
    "react-slick": "<rootDir>/src/index.js"
  }
};
