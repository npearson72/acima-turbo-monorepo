module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'airbnb-typescript/base', 'turbo', './shared/rules'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest'
  },
  ignorePatterns: ['node_modules', 'dist', 'build', '!.*rc.js']
};
