const {pathsToModuleNameMapper} = require('ts-jest');
const {compilerOptions} = require('./tsconfig.json');

module.exports = {
  // Directories Jest uses to search for source and test files.
  roots: [
    '<rootDir>/src',
    '<rootDir>/__tests__/'
  ],

  // Compile TypeScript files with ts-jest before running tests.
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },

  // Match test files inside __tests__/ with .test.ts or .spec.ts extensions.
  testRegex: '/__tests__/.*\\.(test|spec)\\.tsx?$',
  moduleFileExtensions: ['ts', 'js'],

  // Map tsconfig path aliases (e.g. "~/") so imports resolve correctly in tests.
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {prefix: '<rootDir>/'}),

  // Inject jest-localstorage-mock before each test suite to provide a mock localStorage.
  setupFiles: ['jest-localstorage-mock']
}
