const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const { ProvidePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

function getHtmlPlugins(chunks) {
  return chunks.map(chunk => {
    return new HtmlPlugin({
      title: 'Acima',
      filename: `${chunk}.html`,
      template: path.resolve('src/assets/index.html'),
      chunks: [chunk]
    });
  });
}

module.exports = {
  entry: {
    popup: path.resolve('src/popup/popup.tsx'),
    options: path.resolve('src/options/options.tsx'),
    background: path.resolve('src/background/background.ts'),
    content: path.resolve('src/content/content.ts')
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'esbuild-loader',
        options: {
          loader: 'tsx',
          target: 'es2016'
        }
      },
      {
        test: /\.(jpg|jpeg|png|svg|woff|woff2|eot|ttf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new ProvidePlugin({ React: 'react' }),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false
    }),
    ...getHtmlPlugins(['popup', 'options'])
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist/apps/extension')
  }
};
