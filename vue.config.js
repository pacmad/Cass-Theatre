module.exports = {
  productionSourceMap: false,
  filenameHashing: false,
  chainWebpack (config) {
    config.plugins.delete('prefetch')
  },
  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  }
}
