module.exports = {
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 6,
    },
    parser:"@babel/eslint-parser",
    env: {
        react: true,
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4],
    },
};