export const hello = () => {
  //exportをconstの先頭につけると、外部からアクセス可能な関数となる。
  console.log("hello!");
};

const funcB = () => {
  console.log("funcB output");
};

export default funcB;

class User {
  constructor(name) {
    this.name = name;
  }
  hello() {
    console.log(this.name);
  }
}

export { User }; //上で定義したUserが外部で使用できる。一つのファイルに一つだけデフォルトのキーワードが設定できて。エクスポートできるのはその一つだけ。
