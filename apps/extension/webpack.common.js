const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
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
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: ['@emotion']
            }
          },
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'tsx',
              target: 'es2016'
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'esbuild-loader',
            options: {
              loader: 'css',
              minify: true
            }
          }
        ]
      },
      {
        test: /\.(jpg|jpeg|png|svg|woff|woff2|eot|ttf)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new Dotenv(),
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
    path: path.resolve(__dirname, 'dist')
  }
};
