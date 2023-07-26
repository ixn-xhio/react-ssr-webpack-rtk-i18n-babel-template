module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  roots: [
    '<rootDir>/',
  ],
  setupFilesAfterEnv: [
    '@testing-library/jest-dom/extend-expect',
    '<rootDir>/__tests__/setupTests.tsx',
  ],
  globals: {
    "ts-jest":{
      diagnostics: false,
      tsConfig: "<rootDir>/tsconfig.jest.json"
    } 
  },
  verbose: true,
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',  
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', ],
  testPathIgnorePatterns: [
    '<rootDir>/.next/',
    '<rootDir>/node_modules/',
    '<rootDir>/coverage',
    '__tests__/setupTests.tsx',
  ],
  coverageDirectory: 'coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0,
    },
  },
  coverageReporters: [
    'clover',
    'json',
    'html',
    'lcov',
    [
      'text',
      {
        skipFull: true,
      },
    ],
  ],
}