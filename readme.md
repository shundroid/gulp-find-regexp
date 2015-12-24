## 概要
gulpで、複数ファイルをgulp.pipeとかしたいとき、`js/*.js`みたいなのが書けるモジュールと書けないモジュール（特にbrowserify）があったから、実装しちゃえ！ということで実装しました。  
globを使っています。

## 準備
package.jsonがある階層で、
```bash
npm i
```

## 使用例
gulpfile.jsと同じ階層にfindregexp.jsを入れて
```js
var find = require("./findregexp");
find("js/*.js", function(files) {
  console.log(files) // [ "js/1.js", "js/2.js" ]（例）
});
```