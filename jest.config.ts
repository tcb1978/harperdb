import type { Config } from 'jest';

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/app/$1",
    "^components/(.*)$": "<rootDir>/app/components/$1",
    "^actions$": "<rootDir>/app/actions",
    "^enums$": "<rootDir>/app/enums",
    "^types$": "<rootDir>/app/types",
  },
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/"
  ],
};

export default config;
