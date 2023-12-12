const Example = () => {
  const clickHandler = () => {
    alert("ボタンがクリックされました");
  };
  const clickHandler2 = () => {
    alert("ボタンがクリックされたぴょん");
  };
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button onClick={clickHandler2}>クリックしてね</button>
    </>
  );
};

export default Example;

// 画面からの入力を受け取るイベント;
// イベントリスナー：画面上にイベントが発生した際に、実行したい関数を登録しておく場所
// ex)クリックイベント、入力欄の値を変更。
// ＊＊＊onClick = {} の　{}がイベントハンドラ。onClickに関数clickHandlerを渡す。JSXを作るときに、実行される。
// イベントリスナーによって登録されたイベントハンドラによって処理することができる。
// // ステートってのもあるよ。

// 関数をまず定義して、要素に{イベントハンドラを登録}。Reactにおけるイベントリスナーの登録方法
