export interface Person {
  username: string;
  password: string;
  age?: number;
}

export const PersonDTO: Person = {
  username: "standard_user",
  password: "locked_out_user",
};
