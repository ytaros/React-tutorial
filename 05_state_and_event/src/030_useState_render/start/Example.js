import { useState } from "react";

const Example = () => {
  let displayVal;
  let [val, setVal] = useState();
  console.log("再レンダリングされました");
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          console.log(e.target.value);
          setVal(e.target.value);
          // displayVal = e.target.value;
        }}
      />
      = {val}
      {/* ={valは、Exampleが実行されないと変わらない。 */}
    </>
  );
};

export default Example;

// 変数の値を変えても、画面の表示が変わらないのはなぜ？
// onChange={(e) => {
//   setVal(e.target.value);
//   // displayVal = e.target.value;
// }}

// 波枠　アロー関数の本文、すなわち、setVal(e.target.value);のコードのみ、クリックされると、実行される。onChangeによって、このコードは実行される。
// Exampleの関数自体を再実行する必要性がある。
// let displayVal;は、Exampleが実行されるたびに値が空になってしまう。いくら値を代入しようとも、空で表示される。

// 画面が変更されるために必要な処理。
// Reactにコンポーネントの再実行（再レンダリング）を依頼し、新しいReact要素を作成してもらう必要がある。
// 変更された値をどこかに保持しておく必要がある。（stateに保存）
// これらを可能にする仕組みを提供するのが、useStateという関数。

//         現在の値（０）と更新用の関数。                    ①React内部と接続、状態が管理されるようになる。（接続Hook into)
//                                                  ②現在の値と更新関数を返却
//              ↓②          ↑①
// useState
// const [ val, setVal ] = useState(０);　ReactHook（React内部の状態管理を保持する仕組みに接続する）
//         現在の値、更新関数  初期値
// setVal(1) ③

// ③更新関数で新しい値をReactに渡す。またReactに自身のコンポーネントを再実行するように依頼する。
// ＊＊＊React内部で保持管理されたコンポーネントに紐づく値をstateと呼ぶ。

// Stateとは（状態）
// コンポーネントごとに保持管理される値。
// コンポーネント内に定義した普通の関数は、レンダリングのたびに初期化され保持されない。
// stateはコンポーネントごとに保持される。
