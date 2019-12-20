module.exports = {
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
  }
}
