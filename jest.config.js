module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  moduleNameMapper: {
    "@src/(.*)": "<rootDir>/src/$1",
    "@services/(.*)": "<rootDir>/src/services/$1",
  },
  setupFiles: ["<rootDir>/jest.setup.js"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
};
