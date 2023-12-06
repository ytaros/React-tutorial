import "./Expression.css";

const Expression = () => {
  const title = "Expression";
  const arry = ["item1", "item2", "item3"];
  const hello = (arg) => `${arg} Function`;
  const JSX = <h3>Hello JSX</h3>;
  return (
    <div className={title.toLowerCase()}>
      <h3>Hello {title}</h3>
      <h3>{arry}</h3>
      <h3>{hello("Hello")}</h3>
      <h3>{/*画面上に表示されません */}</h3>
      {<h3>Hello JSX</h3>}
      {/* 完全にJavaScriptのコード（オブジェクト）として扱うことができる。 */}
      {JSX}
    </div>
  );
};

export default Expression;
