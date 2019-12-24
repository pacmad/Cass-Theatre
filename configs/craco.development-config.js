const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  mode: 'development',
  webpack: {
    plugins: [new BundleAnalyzerPlugin()]
  }
}
