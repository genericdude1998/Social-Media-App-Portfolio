module.exports = {
    setupFilesAfterEnv: ['./tests/jestSetup.js'],
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/tests/mockStyles.js',
    },
};