module.exports = {
    setupFilesAfterEnv: ['./tests/jestSetup.js'],
    moduleNameMapper: {
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    snapshotSerializers: ['enzyme-to-json/serializer'],
};