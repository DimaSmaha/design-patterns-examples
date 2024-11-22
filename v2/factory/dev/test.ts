import { ClassOne } from "./class1";
import { ClassFactory } from "./factory";
let factory = new ClassFactory().hook("classOne");

console.log(factory);

if (factory instanceof ClassOne) {
  factory.hiFromClass();
}
