import { Observer } from "./class";

let observer = new Observer();

let fn1 = (data: string) => {
  console.log(`this is function 1 ${data}`);
};
let fn2 = (data: string) => {
  console.log(`this is function 2 ${data}`);
};

observer.subscribe(fn1);
observer.broadcast("this is radio");

observer.subscribe(fn2);
observer.broadcast("this is pss");

observer.unsubscribe(fn2);
observer.broadcast("this is la");
