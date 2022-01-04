module.exports = {
    setupFiles: ['jest-localstorage-mock'],
    resetMocks: false,
    setupFilesAfterEnv: ['./tests/jestSetup.js'],
    moduleNameMapper: {
        '\\.(css|less|png)$': 'identity-obj-proxy',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
    modulePathIgnorePatterns: ['/cypress/'],
};