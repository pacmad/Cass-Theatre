module.exports = {
  plugins: {
    'postcss-mixins': {},
    'postcss-preset-env': {
      stage: 0,
      browsers: ['>= 1%'],
      importFrom: ['src/styles/postcss/-media-queries.css']
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
