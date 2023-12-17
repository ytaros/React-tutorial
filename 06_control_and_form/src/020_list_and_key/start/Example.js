const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });

  return (
    <>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {/* {animalList} */}

        {animals.map((animal) => (
          <li key={animal}>Hello, {animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;

// ReactはReact要素ツリーに変更があった場合に、差分を取得して変更しないといけないものを
// ブラウザのDOMに対して行うようになっている。React要素ツリーと、レンダリングされた最新のReact要素ツリーを見比べて、
// 変更分（差分だけ）をブラウザに反映させる。差分検出。

// React要素ツリーの一番最後に変更（追加）があった場合は、（Real)DOMの下に追加。
// 先頭に挿入があった場合は、すべての子のReact要素を変更してしまい、すべてのReal DOMを洗いかえる。
// 子要素をすべて削除して、入れ替えることを洗い替えるという。

// Keyを持たせていれば、Reactはどの要素が変更。追加、削除されたかを識別できるようになるため、差分のみを更新することが可能になる。

// ・Keyは一意の値を設定。
// ・キーに設定した値は変更しない。
// ・配列のインデックスはなるべく、使わない。
