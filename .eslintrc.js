module.exports = {
  root: true,
  extends: ['@acima/custom/react'],
  parserOptions: {
    project: 'tsconfig.eslint.json',
    tsconfigRootDir: __dirname
  },
  ignorePatterns: ['!/.ladle']
};
