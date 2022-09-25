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
    // Typescript does not allow default values in interfaces
    'react/function-component-definition': [
      'error',
      { namedComponents: 'arrow-function' }
    ],
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'react/style-prop-object': [
      'error',
      {
        allow: ['StatusBar']
      }
    ]
  },
  ignorePatterns: [
    'node_modules',
    'dist',
    'build',
    'ios',
    'android',
    '!.*rc.js'
  ]
};
