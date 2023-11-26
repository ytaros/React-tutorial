// 三項演算子（ ? : ）

const a = 0;
let resultA = a ? 10 : -10;

// resultAの条件a（条件式）　？　trueの値を取得：falseの値を取得

// if (a) {
//   resultA = "true";
// } else {
//   resultA = "false";
// }
console.log(resultA);

function getResult() {
  return a ? "true" : "false";
}

console.log(getResult());

// 0, null, undefined, false, 空文字列 '', NaN は全て falsy と評価されます。
// これ以外の値は全て truthy と評価されます。
// あなたのコード例において、const a = 1; としています。
// 1 は truthy と評価されるので、a ? "true" : "false" は "true" を返します。
// したがって、getResult() 関数も "true" を返すことになります。
