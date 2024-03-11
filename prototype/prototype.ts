import { UserData } from "./object";

let originalObject = new UserData("Dima", "Smaha", 21, "Witcher 3", [
  "Sam",
  "John",
  "Jason",
  "Samuel",
  "Justin",
]);

console.log(originalObject);
console.log(typeof originalObject);

let copiedObject1 = originalObject.copyObject("Robert", undefined, 31);
let copiedObject2 = originalObject.copyObject(
  "Robert",
  undefined,
  31,
  undefined,
  ["Alexa"]
);
console.log(copiedObject1);
console.log(copiedObject2);
console.log(originalObject);
