//** Yes I know that it does not looks like a DTO in the essential way */
//** But its a DTO implementation of DTO for the auto testing purposes & data generation */

export interface Person {
  firstName: string;
  lastName: string;
  age?: number;
}

export const PersonDTO: Person = {
  firstName: "John",
  lastName: "Doe",
};
