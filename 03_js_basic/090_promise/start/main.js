// 非同期処理

let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
  }, 2000);
})
  .then((b) => {
    console.log(b);
    return b;
  })
  .then((b) => {
    console.log(b);
  })
  .catch((c) => {
    console.log("catchが実行", c);
  });
// 2000として第二引数を設定するとこれは2000ミリ秒を待った後にコールバック関数を実行するという意味
// セットタイムアウトの中のコールバック関数などが非同期処理
// catchメソッドはPromiseメソッドに何らかの不具合が発生した時に起きる処理を書く？
// .then メソッドは、Promiseが成功した（resolve が呼び出された）場合に実行される関数を登録
// 二番目の then では、前の then から渡された値 b を再度コンソールに出力
