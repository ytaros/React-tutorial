import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  return (
    <>
      <h3>配列のフィルター</h3>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))}
      </ul>
    </>
  );
};

export default Example;

// indexOf
// indexOfとは
// 文字列に含まれる部分文字列を検索する為に、indexOfメソッドを利用します。
// indexOfメソッドは、指定された部分文字列が最初に登場した位置を、文字列の先頭を0としたインデックス番号で返します。
// 文字列が見つからなかった場合、戻り値は-1となります。
