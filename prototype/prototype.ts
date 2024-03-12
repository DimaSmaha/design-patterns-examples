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

let copiedObject1 = originalObject.copyObject({ name: "Robert" });
let copiedObject2 = originalObject.copyObject({ name: "Leo", age: 33 });
let copiedObject3 = originalObject.copyObject({
  name: "Sam",
  friends: ["Ses"],
});
console.log(copiedObject1);
console.log(copiedObject2);
console.log(copiedObject3);
console.log(originalObject);

// let copiedObject1 = originalObject.copyObject("Robert", undefined, 31);
// let copiedObject2 = originalObject.copyObject(
//   "Jason",
//   undefined,
//   35,
//   undefined,
//   ["Alexa"]
// );
// let copiedObject3 = originalObject.copyObject(undefined, "Rass");
// console.log(copiedObject1);
// console.log(copiedObject2);
// console.log(copiedObject3);
// console.log(originalObject);
