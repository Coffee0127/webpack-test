var path = require('path');
var webpack = require('webpack');

module.exports = {
  // bundle 進入點
  entry: ['./src/index'], // 在 index 檔案後的 .js 副檔名是可選的
  // 宣告 webpack 輸出形式
  output: {
    // 存放 bundle 位置
    path: path.join(__dirname, 'dist'),
    // bundle 檔名
    filename: 'bundle.js'
  },

  // 使用 webpack plugins
  plugins: [
    // https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    // https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
    // 根據調用次數指定 module 和 chunk 的 id。越常用的 id 較小（短）的 id。這使得 id 可以預測，可以減少檔案的大小
    new webpack.optimize.OccurrenceOrderPlugin()
  ]
};
