const path = require('path')

module.exports = {
  mode: 'development',
  entry: ['./js/app.js'],
  output: {
    filename: './js/out.js',
    path: path.resolve(__dirname, '.')
  }
}