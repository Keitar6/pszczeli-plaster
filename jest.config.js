module.exports = {
  moduleNameMapper: {
    "\\.svg$": "<rootDir>/__mocks__/svg.ts"
  },
  testEnvironment: "jsdom",
  preset: "ts-jest",
  collectCoverageFrom: ["!**/tests/**/*"],

};
