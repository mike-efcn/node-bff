const path = require('path');

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    },
  },
  globalSetup: path.resolve(__dirname, 'test/globalSetup.ts'),
  preset: 'ts-jest',
  setupFiles: [
    path.resolve(__dirname, 'test/setupFiles.ts'),
  ],
  testEnvironment: 'node',
  verbose: true,
};
