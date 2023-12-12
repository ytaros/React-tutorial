import { useState } from "react";
// POINT stateとコンポーネントの関係
const Example = () => {
  const [toggle, setToggle] = useState(true);
  const toggleComponent = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <button onClick={toggleComponent}>toggle</button>
      {toggle ? <Count key="A" title="A" /> : <Count key="B" title="B" />}
    </>
  );
};

const Count = ({ title }) => {
  const [count, setCount] = useState(0);
  const countUp = () => {
    setCount((prevstate) => prevstate + 1);
  };
  const countDown = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h3>
        {title}: {count}
      </h3>
      <button onClick={countUp}>+</button>
      <button onClick={countDown}>-</button>
    </>
  );
};

export default Example;
//  key:コンポーネントを一意に識別するために使用するもの
// stateはコンポーネントごとに独立して管理される。
// React要素のツリー内の位置によってどのコンポーネントのstateか識別している。
// コンポーネントのReact要素の釣り０ーにおける位置が変わらない場合はstateが保持される。
// 分けて管理する場合は、keyという属性を付与することで別のstateというふうにみなされる。値がリセットされる。
