module.exports = {
  plugins: {
    'postcss-preset-env': {
      stage: 0,
      browsers: ['>= 1%'],
      importFrom: ['src/styles/-media-queries.css']
    },
    'postcss-merge-rules': {},
    'postcss-grouper': {},
    'css-mqpacker': {},
    doiuse: {
      browsers: ['> 1%', 'not ie <= 11', 'not op_mini all']
    },
    cssnano: {},
    autoprefixer: {}
  }
}
