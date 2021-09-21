module.exports = {
    env: {
        browser: true,
        es2020: true,
    },
    extends: ['airbnb-base', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        'no-console': 0,
        indent: 0,
        'linebreak-style': 0,
        'prettier/prettier': [
            'error',
            {
                trailingComma: 'es5',
                singleQuote: true,
                printWidth: 100,
                tabWidth: 4,
                semi: true,
            },
        ],
    },
    plugins: ['prettier'],
};
