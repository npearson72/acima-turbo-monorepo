module.exports = {
  root: true,
  extends: ['@acima/custom'],
  parserOptions: {
    project: ['./tsconfig.json', '../../tsconfig.eslint.json'],
    tsconfigRootDir: __dirname
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: ['apps/server/tsconfig.json']
      }
    }
  }
};
