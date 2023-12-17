import Profile from "./components/Profile";
import { useState } from "react";
// Profile コンポーネントを他のファイルからインポートしています。
// ReactのuseState フックをインポートしています。これは、コンポーネントの状態（この場合はフィルターの値）を管理するために使用されます。

const persons = [
  {
    name: "Geo",
    age: 18,
    hobbies: ["sports", "music"],
  },
  {
    name: "Tom",
    age: 25,
    hobbies: ["movie", "music"],
  },
  {
    name: "Lisa",
    age: 21,
    hobbies: ["sports", "travel", "game"],
  },
];

const Example = () => {
  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {persons
          .filter((person) => {
            const isMatch = person.name.indexOf(filterVal) !== -1;
            return isMatch;
          })
          .map((person) => (
            <li key={person.name}>
              <Profile {...person} />
            </li>
          ))}
      </ul>
    </>
  );
};

export default Example;
// persons は、複数のユーザー情報（名前、年齢、趣味）を含む配列です。
// Example はReactの関数コンポーネントです。このコンポーネントは、ユーザーインターフェースの一部を描画します。
// filterVal は、フィルターの現在値を保持します。初期値は空の文字列です。
// setFilterVal は、filterVal の値を更新するための関数です。
//<input> 要素は、ユーザーがフィルター値を入力するためのテキストボックスです。
// 入力された値はfilterVal に保存され、onChange イベントでsetFilterVal を通じて更新されます。
// persons 配列はfilter メソッドを使用してフィルタリングされ、条件に一致する要素のみが残ります。
// map メソッドは、フィルタリングされた各要素に対して行われ、Profile コンポーネントを使ってそれらのデータを表示します。
// 各personのname プロパティがfilterVal と一致するかどうかをチェックしています。
// indexOf メソッドは、一致する場合に0以上の値、一致しない場合に-1を返します。
