module.exports = {
  root: true,
  extends: ['@acima/custom'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname
  }
};
