var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-eval-source-map',
  // bundle 進入點
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index'
  ],
  // 宣告 webpack 輸出形式
  output: {
    // 存放 bundle 位置
    path: path.join(__dirname, 'dist'),
    // bundle 檔名
    filename: 'bundle.js'
  },

  // 使用 webpack plugins
  plugins: [
    // 省略 optimize plugin，當 rebuild 時，它們是不必要的
    /*new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),*/
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],

  // 設定檔案選項
  module: {
    // 設定 loader 陣列
    loaders: [{
      // 使用正則表示式，找出要套用 loader 的檔案
      test: /\.css$/,
      // 指定哪些 loader 適用於匹配前述 test 檔案
      // 被指定的 loader 是有順序的，依序 css -> styles
      loaders: [ 'style', 'css' ]
    }]
  },
  // 對 dev server 做必要的設定
  devServer: {
    // 服務的檔案來自哪裡
    contentBase: './dist',
    // 啟用 Hot Module Replacement
    hot: true
  }
};
