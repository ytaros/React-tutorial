/* POINT 式と文
式：何らかの値を返すもの（変数に代入できるもの）JSX内で使用可能。for ifは波括弧内ではつかえん。
文：変数宣言、for文、if文、switch文やセミコロンで区切るもの。JSX内で使用不可。
*/

import "./Child.css";

const Child = () => {
  const hello = () => "hello";
  const a = "hello";
  console.log(1 === 1);
  for (let i = 0; i < 5; i++)
    return (
      <div className="component">
        <h3>式と文</h3>
        {false ? "hello" : "bye"}
      </div>
    );
};

export default Child;
