// 非同期処理（await/async）
// 簡略化するためのawait
let a = 0;
init();

async function init() {
  try {
    const result = await new Promise((resolve, reject) => {
      setTimeout(() => {
        a = 1;
        resolve(a);
      }, 2000);
    });
    console.log(result);
  } catch (e) {
    console.log("catchが実行", e);
  }
}
// await キーワードを使用して非同期処理の完了を待つ。そのために必要なのがasyncというキーワード
// try/catch ブロックを使用してエラーを適切に処理する
