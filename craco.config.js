module.exports = {
  style: {
    postcss: {
      plugins: [
        require('postcss-pxtorem') ({
          unitPrecision: 10,
          propList: ['*'],
          mediaQuery: true
        }),
        require('css-mqpacker'),
        require('cssnano')
      ],
      env: {
        autoprefixer: {},
        stage: 0
      }
    }
  }
}
