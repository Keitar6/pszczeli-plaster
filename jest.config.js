module.exports = {
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svg.ts"
  },
  testEnvironment: "jsdom",
  verbose: true,
  preset: "ts-jest",
  collectCoverageFrom: ["!**/tests/**/*"]
};
