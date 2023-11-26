// falsy → 真偽値に変換した際に"偽(false)"とみなされる値のこと。
// truthy → それ以外

/* falsyな値の一覧
false
0 (数字)
0n (big int)
"" (空文字)
null
undefined
NaN (Not a Number)
*/

const a = "";
let result = a ? 10 : -10;
console.log(result);

const falsy = 0;
const truthy = 1;
console.log(Boolean(truthy));
console.log(Boolean(falsy));
// Boolean 関数は任意の値を true または false に変換し、その値が真偽値としてどのように評価されるかを明示的に示す

// 論理積 (&&) について
const resultA = "" && "foo";
// falsyな値を見つけた時にresultAに格納していく。
const resultB = 2 && 1 && 0 && 3;
// 左側がtruthyで右側がfalsyなので右側が返される。
const resultC = "foo" && 4;
// falsyな値がない場合は、右側が返される。

console.log(resultA);
console.log(resultB);
console.log(resultC);

// 理論和 (||) について
const resultD = "" || "foo";
const resultE = 0 || 2 || 0;
const resultF = "foo" || 4;

console.log(resultD);
console.log(resultE);
console.log(resultF);

// 要は積ならfalsyを取って、和ならtruthyを取るってことだってばよ？
