const config = require('./jest.config');

const ext = {
    coverageDirectory: undefined,
    coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
    collectCoverageFrom: [
        '**/*.{js,jsx,ts,tsx}',
        '!**/node_modules/**',
        '!scripts/**',
    ],
};

module.exports = {
    ...config,
    ...ext,
};
