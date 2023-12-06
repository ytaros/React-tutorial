import "./Child.css";
import { List } from "./List";

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

export default Child;

// コンポーネントはファイルごとに書いていく。一つのファイルに一つのコンポーネント。
// 複数のコンポーネントを使うときは名前付きエクスポートを使えばいい。
