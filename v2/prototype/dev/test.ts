import { Person } from "./obj";

let basePerson = new Person("Dima", "Smaha", 20);
console.log(basePerson);

let cloned = basePerson.clone({ age: 22 });
console.log(cloned);
console.log(basePerson);
