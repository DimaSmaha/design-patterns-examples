/**
 * Create a modifiable object
 * Pass the whole object to the method
 * Allow to modify object
 * Allow methods to get the specific fields they need
 */

export interface Person {
  username: string;
  password: string;
  age?: number;
}

export const PersonDTO: Person = {
  username: "standard_user",
  password: "locked_out_user",
};
