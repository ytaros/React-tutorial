// POINT ESModuleの使い方
import functionB, { hello, User } from "./module.js"; //モジュールバンドラー
hello();
functionB();
const user = new User("Tom");
user.hello();
