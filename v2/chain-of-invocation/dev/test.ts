import { Actions } from "./class";

const actions = new Actions("Dima");

actions.run().walk().eat().crouch();
console.log("----------------------");
actions.crouch();

// not possible since crouch does not `return this` state of current object
// actions.run().walk().crouch().eat()
