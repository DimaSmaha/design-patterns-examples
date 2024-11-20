interface IRegistrationData {
  name: string;
  password: string;
  age: number;
}

export class RegistrationData implements IRegistrationData {
  constructor(name: string, password: string, age: number) {
    (this.name = name), (this.password = password), (this.age = age);
  }
  age: number;
  name: string;
  password: string;
}
