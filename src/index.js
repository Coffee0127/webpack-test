// 因為有設定 webpack loader，故可以 require css 檔案
// require('./styles.css');

// 使 Hot Module Replacement 可以執行
if (module.hot) {
  module.hot.accept();
}

require('./styles.css');  // 載入網頁樣式

var Please = require('pleasejs');
var div = document.getElementById('color');
var button = document.getElementById('button');

function changeColor() {
  div.style.backgroundColor = Please.make_color();
}

button.addEventListener('click', changeColor);
