import { Person, PersonDTO } from "./dto";

console.log("---------------------");
console.log(PersonDTO);
console.log(PersonDTO.firstName);

console.log("---------------------");
PersonDTO.firstName = "James";
PersonDTO.age = 21;

console.log(PersonDTO);
console.log(PersonDTO.firstName);

console.log("---------------------");
function showName(person: Person) {
  console.log(person.lastName);
}

function showAge(person: Person) {
  console.log(person.age);
}

showName(PersonDTO);
showAge(PersonDTO);
console.log("---------------------");
