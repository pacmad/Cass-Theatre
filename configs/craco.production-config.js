const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlCriticalWebpackPlugin = require('html-critical-webpack-plugin')
const path = require('path')

module.exports = {
  mode: 'production',
  style: {
    postcss: {
      plugins: [
        require('postcss-pxtorem')({
          unitPrecision: 15,
          propList: ['*'],
          mediaQuery: true
        }),
        require('css-mqpacker'),
        require('postcss-combine-duplicated-selectors'),
        require('postcss-round-subpixels'),
        require('css-declaration-sorter'),
        require('cssnano')({
          preset: 'advanced'
        })
      ],
      env: {
        autoprefixer: {},
        stage: 4
      }
    }
  },
  webpack: {
    plugins: [
      new HtmlWebpackPlugin({}),
      new MiniCssExtractPlugin({}),
      new HtmlCriticalWebpackPlugin({
        base: path.resolve(__dirname, '../build'),
        src: 'index.html',
        dest: 'index.html',
        inline: true,
        minify: true,
        extract: true,
        width: 375,
        height: 812,
        penthouse: {
          blockJSRequests: false
        }
      })
    ]
  },
  babel: {
    presets: [
      [
        '@babel/preset-env',
        {
          targets: '>0.25%'
        }
      ]
    ]
  }
}
