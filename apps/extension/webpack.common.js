const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ForkTsCheckerPlugin = require('fork-ts-checker-webpack-plugin');
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
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new ForkTsCheckerPlugin(),
    new CleanWebpackPlugin({
      cleanStaleWebpackAssets: false,
      protectWebpackAssets: false,
      cleanAfterEveryBuildPatterns: ['*.LICENSE.txt']
    }),
    ...getHtmlPlugins(['popup', 'options'])
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../../dist/apps/extension')
  },
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
  }
};
