import { useState } from "react";

const Example = () => {
  let [val, setVal] = useState();
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          // const setFn = valArry[1];
          setVal(e.target.value);
        }}
      />{" "}
      = {val}
    </>
  );
};

export default Example;

// 配列の０番目に参照用の値が渡る。
// 配列の０番目：参照用の値
// 配列の１番目：更新用の関数。
