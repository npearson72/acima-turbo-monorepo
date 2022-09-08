module.exports = {
  rules: {
    '@typescript-eslint/comma-dangle': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function'],
        format: null,
        leadingUnderscore: 'allow'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'max-len': ['error', { code: 80 }]
  },
  overrides: [
    // Use overrides for similar rules that apply to different file types
    {
      files: ['*.js', '*.jsx', '*.cjs', '*.mjs'],
      rules: {
        '@typescript-eslint/quotes': 'off',
        quotes: ['error', 'single']
      }
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/quotes': ['error', 'single'],
        quotes: 'off'
      }
    }
  ]
};
