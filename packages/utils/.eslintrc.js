module.exports = {
  root: true,
  extends: ['@acima/custom'],
  parserOptions: {
    project: ['./tsconfig.json', '../../tsconfig.eslint.json'],
    tsconfigRootDir: __dirname
  }
};
