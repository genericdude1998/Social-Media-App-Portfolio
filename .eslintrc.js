module.exports = {
    extends: ['eslint:recommended','plugin:jest/recommended', 'plugin:react/recommended'],
    plugins:['jest', 'react'],
    parserOptions: {
        ecmaVersion: 6,
    },
    settings:{
        react:{
            version: '17.0.2',
        },
    },
    parser:'@babel/eslint-parser',
    env: {
        node:true,
        browser:true,
        es6:true,
    },
    rules: {
        quotes: ['error', 'single', { avoidEscape: true }],
        'comma-dangle': ['error', 'always-multiline'],
        'indent': ['error', 4],
    },
    ignorePatterns: ['dist', 'node_modules'],
};