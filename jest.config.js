const {pathsToModuleNameMapper} = require('ts-jest');
const {compilerOptions} = require('./tsconfig.json');

module.exports = {
  roots: [
    '<rootDir>/src',
    '<rootDir>/tests/'
  ],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '/tests/.*\\.(test|spec)\\.tsx?$',
  moduleFileExtensions: ['ts', 'js'],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths , {prefix: '<rootDir>/'}),
  // resetMocks and setupFiles are options for jest-localstorage-mock.
  // resetMocks: false,
  setupFiles: ['jest-localstorage-mock']
}