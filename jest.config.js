module.exports = {
    roots: ['<rootDir>/src'],
    verbose: true,
    cacheDirectory: '/tmp/tests',
    coverageDirectory: '/tmp/coverage',
    testEnvironment: 'jsdom',
    testURL: 'http://localhost:3000',
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    setupTestFrameworkScriptFile: '<rootDir>/scripts/jest/setup.js',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.svg$': '<rootDir>/scripts/jest/svg-sprite-loader.js',
    },
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    snapshotSerializers: ['enzyme-to-json/serializer'],
    testResultsProcessor: 'jest-sonar-reporter',
    globals: {
        window: true,
        snapshot: true,
        'ts-jest': {
            tsConfig: './tsconfig.json',
        },
    },
};
