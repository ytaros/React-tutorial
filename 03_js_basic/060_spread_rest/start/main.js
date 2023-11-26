// スプレッド演算子
// 配列を展開して関数に渡す。
// 配列を展開したものをまた別の配列にコピー。
// オブジェクトに対しても使用できる。

const nums = [3, 1, 4, 1, 5, 10, 2, 6];

const result = Math.max(...nums);
// ...numsと入れることで、配列が保持する要素がひとつずつ展開されて引数に渡されることになる。
console.log(result);

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let newArr = [...arr1, 10, ...arr2];
// あくまでnewArrとarr1は別物。等価演算子を使用するとfalseになる。
let newArr1 = arr1;
// 同じ配列になる。等価演算子使用するとtrueになる。
newArr1.push(4);
console.log(newArr);
// 配列の参照を受け取ったarr1も4が追加される。

// = は代入演算子であり、変数に値や他の変数の参照を代入するために使用。
// 参照型のデータ（例えば配列やオブジェクト）の場合、代入はデータ自体ではなく、そのデータが格納されているメモリ位置の参照をコピー。

const obj = {
  name: "Tom",
  age: 22,
};
const newObj = { ...obj };
newObj.name = "John";
console.log(newObj, obj);
// 参照している場合は、新しいオブジェクトのnameプロパティは変更されても、元のオブジェクトのnameプロパティに変更はないよ。

const restA = (...argA) => console.log(argA);
restA(1, 3, 4);
// RESTパラメーターや残余引数というもの。関数の引数として、restAから渡ってきた引数をargAの配列にまとめて関数名で使用。
// 可変長の引数が決まっていない場合、配列を一度纏めてから関数内に処理することが一般的。スプレッド演算子と同じだが、読み方を変えることもある。

const restB = (n, ...argB) => console.log(argB);
restB(1, 3, 4);
// ひとつ目の引数はnに入る。残りの引数はargBに入る。そのため、argBは3,4が入る。
