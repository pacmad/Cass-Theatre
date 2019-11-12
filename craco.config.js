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
        require('postcss-combine-duplicated-selectors'),
        require('postcss-round-subpixels'),
        require('postcss-extract-value'),
        require('cssnano')
      ],
      env: {
        autoprefixer: {},
        stage: 4
      }
    }
  }
}
