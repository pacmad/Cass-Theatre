module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-clip-path-polyfill'),
        require('cssnano')
      ],
      env: {
        autoprefixer: {},
        stage: 0
      }
    }
  }
}
