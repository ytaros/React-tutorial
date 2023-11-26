// タグをJavaScriptから取得するためには
const h1Element = document.querySelector("h1");
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = "変更後のタイトル";

const btnEl = document.querySelector("button");
const helloFn = (event) => {
  console.dir(event.target.textContent);
  console.log("hello");
};
btnEl.addEventListener("click", helloFn);
//クリックイベントというアクションタイプを渡す。
// 第二引数に、クリックされたときに実行したい関数を渡してあげる。この場合、ARROW関数でコンソールのHELLOとする。
//上記のようにクリックして起こるイベントをイベントハンドラーまたはアクションという。事前に定義した関数を登録することも可能。

// JavaScript内ではオブジェクトの形式でHTMLにアクセスすると覚える。
// このときとれてくるオブジェクトをDOM、DOMオブジェクト、ノードなどと呼ぶ。
// イベントリスナーとは、例えば画面クリックに応じて何らかのJavaScriptのコードを時効したい場合に使用するもの。
// イベントリスナーに関数を登録する場合にはaddEventListenerというメソッドを使用する。
// addEventListenerなどに渡すコールバック関数には引数が渡ってきて、eventもしくはeというふうに名前をつけることが多い、
// eventをコンソールすると、プロパティが見れる（発火するまでのプロセス）。
// targetを指定すると、DOMのプロパティが見れるよ。

// ＜Chat GPTより＞
// addEventListener メソッドはイベントリスナーを要素に追加するために使用されます。
// この例では、btnEl.addEventListener("click", helloFn); というコードがあり、これはボタン（btnEl）がクリックされたときに helloFn 関数を実行するように設定されています。

// helloFn 関数は、イベントハンドラー（またはコールバック関数）として定義されており、イベントオブジェクト（この場合は event）を受け取ります。
// このイベントオブジェクトは、イベントに関連する多くの情報を持っています。event.target はイベントが発生した要素を参照し、この例ではクリックされたボタンを指します。event.target.textContent で、そのボタンのテキスト内容を取得しています。そして、コンソールにそのテキスト内容と "hello" という文字列を出力します。

// このコードの流れは次のようになります：

// ボタンを選択（document.querySelector("button")）して、btnEl という変数に格納します。
// helloFn 関数を定義します。この関数はイベントオブジェクトを受け取り、クリックされたボタンのテキスト内容をコンソールに表示し、
// さらに "hello" と出力します。
// addEventListener を使用して、btnEl（ボタン）にクリックイベントリスナーを追加します。
// クリックされると、helloFn 関数が実行されます。
