module.exports = {
  rules: {
    '@typescript-eslint/comma-dangle': 'off',
    // https://github.com/typescript-eslint/typescript-eslint/issues/1824
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/lines-between-class-members': 'off',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: ['variable', 'function'],
        format: null,
        leadingUnderscore: 'allow'
      }
    ],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/quotes': 'off',
    'arrow-body-style': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'max-classes-per-file': 'off',
    'max-len': ['error', { code: 80 }],
    'object-curly-newline': 'off',
    quotes: 'off'
  }
};
