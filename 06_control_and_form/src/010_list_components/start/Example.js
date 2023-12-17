const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  // POINT for文でJSXの配列を作成.他の文では代入できない。
  const animalList = [];
  for (const animal of animals) {
    animalList.push(<li>{animal}</li>);
  }

  // POINT map関数でJSXの配列を作成。式は代入できる。
  const helloAnimals = animals.map((animal) => {
    return <li>Hello {animal}</li>;
  });
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {/* <li>{animals[0]}</li>
        <li>{animals[1]}</li>
        <li>{animals[2]}</li> */}
        {/* {animalList}
        {helloAnimals} */}
        {animals.map((animal) => (
          <li>Hello, {animal}</li>
        ))}
      </ul>
    </>
  );
};

export default Example;
