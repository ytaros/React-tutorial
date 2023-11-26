function print(fn) {
  const result = fn(2);
  console.log(result);
}

function fn(number = 3) {
  return number * 2;
}

debugger;
print(fn); //fnをコールバック関数として引数を渡す。Fnがコールバックという引数になって、Fnの関数が実行される。実行結果がresultになって、consoleに出力される。

//NaNはundifind（未定義）
//number=3にすると、numberに数字が渡って来なかった場合、初期値として3が代入される。
