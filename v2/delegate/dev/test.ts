import { Main } from "./class2";

const main = new Main();

console.log("1.===========================");
main.mainFunc().mainWithComp();

console.log("2.===========================");
main.components.componentOne().componentTwo();

console.log("3.===========================");
main.mainFunc().components.componentTwo();
