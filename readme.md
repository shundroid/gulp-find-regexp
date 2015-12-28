## 概要
gulpで、複数ファイルをgulp.pipeとかしたいとき、`js/*.js`みたいなのが書けるモジュールと書けないモジュールがあったから、実装しちゃえ！ということで実装しました。  
globを使っています。

## 準備
package.jsonがある階層で、
```bash
npm i
```

## 使用例
```js
var find = require("gulp-find-glob");
find("js/*.js").then((files) => {
  console.log(files) // [ "js/1.js", "js/2.js" ]（例）
});
```