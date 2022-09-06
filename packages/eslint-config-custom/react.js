module.exports = {
  env: {
    es2021: true,
    node: true,
    browser: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'turbo',
    './shared/rules'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'react/jsx-one-expression-per-line': 'off'
  },
  ignorePatterns: ['node_modules', 'dist', 'build', '!.*rc.js']
};