const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/assets/manifest.json'),
          to: path.resolve(__dirname, '../../dist/apps/extension')
        }
      ]
    })
  ]
});
