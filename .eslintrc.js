module.exports = {
    root: true,
    env: {
        "cypress/globals": true
      },
    extends: [
        require.resolve('@fcc/rbru-config/eslint/index.js'),
        require.resolve('@fcc/rbru-config/eslint/react.js'),
        require.resolve('@fcc/rbru-config/eslint/jest.js')
    ],
    parser: "typescript-eslint-parser",
    parserOptions: {
        "jsx": true,
        "useJSXTextNode": true
    },
    plugins: ["typescript", "cypress"],

    rules: {
        'guard-for-in': 0,
        'react/prop-types': 0,
        'no-unused-vars': 'error',
        'comma-dangle': [2, 'always-multiline'],
        'typescript/no-unused-vars': 'error',
        'react/jsx-closing-bracket-location': [2, 'tag-aligned'],
        "cypress/no-assigning-return-values": "error",
        "cypress/no-unnecessary-waiting": "error",
        "cypress/assertion-before-screenshot": "warn",
    },
    settings: {
        react: {
            version: 'latest'
        }
    }
}
