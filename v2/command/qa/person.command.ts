//** Probably stupid example but I really dont have any mood to create something other*/

export interface IPerson {
  username: string;
  password: string;
  age?: number;
}

export class Person implements IPerson {
  username: string;
  password: string;
  age?: number | undefined;

  constructor() {
    this.username = "";
    this.password = "";
    this.age = undefined;
  }

  addField(field: keyof IPerson, value: AddUsername | AddPassword | AddAge) {
    this[`${field.toString()}`] = value.passToField();
  }

  clearField(field: keyof IPerson) {
    this[`${field.toString()}`] = "";
  }
}

export class AddUsername {
  username: string;

  constructor(username: string) {
    this.username = username;
  }

  passToField() {
    return this.username;
  }
}

export class AddPassword {
  password: string;

  constructor(password: string) {
    this.password = password;
  }

  passToField() {
    return this.password;
  }
}

export class AddAge {
  age: number;

  constructor(age: number) {
    this.age = age;
  }

  passToField() {
    return this.age;
  }
}
