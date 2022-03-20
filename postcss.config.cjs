module.exports = {
  plugins: [
    require('postcss-jit-props')({ files: ['src/lib/styles/index.css'] }),
    require('autoprefixer'),
  ]
}