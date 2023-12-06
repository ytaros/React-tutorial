import "./Child.css";
import React from "react";

const Child = () => {
  return (
    <React.Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Flagment</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
        repellat dolor doloribus iure consequatur soluta? Optio corrupti ratione
        suscipit recusandae eius perspiciatis illo corporis? Aliquam nam
        repellendus quos expedita est?
      </p>
    </React.Fragment>
  );
};

export default Child;

// 一つのルート要素で束ねなければいけないルールがある。div h3 pのルート要素として存在す。
// けど無駄にdivで挟みたくないよね。そういう時にroot要素を束ねる時に使うのがフラグメントコンポート。
{
  /* <React.Fragment>は、余計なタグを増やさないために使うもの。 */
}
// 様々なReactのコンポーネントや関数が格納されているよ。
{
  /* <></>だけで表せることもある。そうなったらimport Reactなども不要。それでも動く不思議。 */
}
// ＜Fragment＞には基本的にタグをつけれない。key属性だけはつけることができる。
