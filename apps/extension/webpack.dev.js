const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common');

function updateManifest(content) {
  const manifest = JSON.parse(content.toString());

  // Allows source maps in development
  manifest.web_accessible_resources = [
    {
      resources: ['*.js.map'],
      matches: ['<all_urls>']
    }
  ];

  return JSON.stringify(manifest);
}

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve('src/assets/manifest.json'),
          to: path.resolve(__dirname, '../../dist/apps/extension'),
          transform: content => {
            return updateManifest(content);
          }
        }
      ]
    })
  ]
});
