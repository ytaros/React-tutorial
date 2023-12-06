import React from "react";

const Bye = () => {
  return <h2>GoodBye!</h2>;
};

const Example = () => {
  return (
    <div>
      <Bye />
    </div>
  );
};

console.log(Example());

export default Example;

// JSXはJSのオブジェクトに変換される。ReactによるJS構文を拡張したもの。
// JSオブジェクトはReact要素と呼ぶ。
//  JSXが変換されていく過程。
//  HTMLがJSに変換され、React要素（JSオブジェクト）に変換、格納されていく。
//  ReactDOMのCreateルートでルート作成、レンダーメソッドでマウントをとる。
//  マウント：何かを接続して利用可能にする状態のことを言う。
//  ReactDOM.createRootこの一文でHTMLにReactの要素を接続する。
//  Reactの記法でJSXで書いたものをREACTが自動的にDOMに反映してくれる。

//  関数コンポーネントはpropsを受け取り、JSXを返す。
//  再利用性の向上、可読性の向上、疎結合。
//  コンポーネントは親子関係で形成される。
//  propsという引数を渡す。親から子に渡す一方通行。複数の子に跨り渡したいものがある場合は、親で定義して子に渡す。
//  propsは読み取り専用。渡されたものは変更できない。
// コンポーネントはREACTのCREATE ELEMENTでREACT要素に変換される。
// コンポーネントツリー　コンポーネントの部分のみ抽出。上から下へ。
