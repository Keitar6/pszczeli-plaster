module.exports = {
  testEnvironment: "jsdom",
  preset: "ts-jest",
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
  transform: {
    "^.+\\.js$": "babel-jest"
  },
  moduleNameMapper: {
    "\\.(s?css|less)$": "identity-obj-proxy"
  },
};
