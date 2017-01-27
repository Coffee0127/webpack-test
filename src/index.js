// 因為有設定 webpack loader，故可以 require css 檔案
// require('./styles.css');

console.log('Hello webpack!!');

function gretting(msg) {
  if (msg) {
    console.log(msg);
  } else {
    console.log('No message input!!');
  }
}
