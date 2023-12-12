import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <CountResult title="カウント" count={count} />
      <CountUpdate setCount={setCount} />
    </>
  );
};
const CountResult = ({ title, count }) => (
  <h3>
    {title}:{count}
  </h3>
);

const CountUpdate = ({ setCount }) => {
  const countUp = () => {
    setCount((prev) => prev + 1);
  };
  const countDown = () => {
    setCount((prev) => prev - 1);
  };
  return (
    <>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

// 画面が変更されるために必要な処理。
// Reactにコンポーネントの再実行を依頼し、新しいReact要素を作成してもらう必要がある。
// 変更した値をどこかに保持しておく必要がある。（stateに保存）

// これらを可能にする仕組みを提供するのがuseStateという関数。

// useState
// ＊コンポーネントの中で呼び出す
// ＊ifやforの中で呼び出さない
// ＊値の更新と再レンダリングは予約（非同期）される。
// ＊前回のstate値を使用する場合は更新用関数に関数を渡す。
// ＊オブジェクト型のstateを更新する際は、新しいオブジェクトを作成する。
// ＊stateの値はコンポーネントごとに独立して管理される。
// ＊一度消滅したコンポーネントのstateの値はリセットされる。
// *stateをpropsとして渡すことで子コンポーネントで利用。
// *コンポーネントの位置によってはstateが維持される。
