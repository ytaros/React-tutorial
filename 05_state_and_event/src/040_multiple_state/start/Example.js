import { useState } from "react";

const Example = () => {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(10);
  const [countC, setCountC] = useState(100);
  return (
    <>
      <p>ボタンAを{countA}回押しました!</p>
      <button
        onClick={() => {
          setCountA(countA + 1);
        }}
      >
        countAボタン
      </button>
      <p>ボタンBを{countB}回押しました!</p>
      <button
        onClick={() => {
          setCountB(countB + 1);
        }}
      >
        countBボタン
      </button>
      <p>ボタンCを{countC}回押しました!</p>
      <button
        onClick={() => {
          setCountC(countC + 1);
        }}
      >
        countCボタン
      </button>
    </>
  );
};

export default Example;

// React内部で書かれているものはコンポーネント内で管理されている。
// 順番によってuseStateが呼ばれる呼ばれないがあるとおかしいことになるので、
// whileやifやforなどの条件分の中には定義しない。。。？？
