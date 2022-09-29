module.exports = {
  root: true,
  extends: ['@acima/custom/react'],
  parserOptions: {
    project: ['./tsconfig.json', '../../tsconfig.eslint.json'],
    tsconfigRootDir: __dirname
  }
};
