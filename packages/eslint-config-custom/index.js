module.exports = {
  env: {
    es2021: true,
    node: true
  },
  extends: ['airbnb-base', 'turbo', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'max-len': ['error', { code: 80 }],
    quotes: ['error', 'single']
  },
  ignorePatterns: ['node_modules', 'dist'],
  overrides: [
    {
      files: ['*.ts'],
      extends: ['airbnb-typescript/base']
    },
    {
      files: ['*.tsx'],
      extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:react/jsx-runtime'
      ],
      rules: {
        'react/jsx-one-expression-per-line': 'off'
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      env: {
        browser: true
      },
      extends: ['turbo', 'prettier'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        'import/resolver': {
          typescript: true
        }
      },
      rules: {
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: ['variable', 'function'],
            format: null,
            leadingUnderscore: 'allow'
          }
        ],
        '@typescript-eslint/quotes': ['error', 'single'],
        '@typescript-eslint/no-unused-vars': 'warn',
        'arrow-parens': ['error', 'as-needed'],
        'import/no-extraneous-dependencies': [
          'error',
          { devDependencies: true }
        ],
        'max-len': ['error', { code: 80 }]
      }
    }
  ]
};
