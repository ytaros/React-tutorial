import { useState } from "react";

const Example = () => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount(count + 1);
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <p>現在のカウント数：{count}</p>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;

// setCount 将来関数コンポーネントが再レンダリングされるときに渡された値になる予約をする
// prevstate 前回更新された値(現在のステート）が引数として渡ってきて、なんらかの処理を加えて値を更新する際に使う関数
// stateの1と、stateの1から更にprevstateで1が加わって、2になる
