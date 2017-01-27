var path = require('path');

module.exports = {
  // bundle 進入點
  entry: ['./src/index'], // 在 index 檔案後的 .js 副檔名是可選的
  // 宣告 webpack 輸出形式
  output: {
    // 存放 bundle 位置
    path: path.join(__dirname, 'dist'),
    // bundle 檔名
    filename: 'bundle.js'
  }
};
