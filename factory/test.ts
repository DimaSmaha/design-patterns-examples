import { Factory } from "./factory";

let getMyLoginData = new Factory().getData("loginData");
let getMyRegistrationData = new Factory().getData("registrationData");

console.log(getMyLoginData);
console.log(getMyRegistrationData);
