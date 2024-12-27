interface IPerson {
  firstName: string;
  sur: string;
  age: number;
}

export class Person implements IPerson {
  firstName: string;
  sur: string;
  age: number;

  constructor(firstName: string, sur: string, age: number) {
    this.firstName = firstName;
    this.sur = sur;
    this.age = age;
  }

  clone(data?: Partial<IPerson>) {
    return new Person(
      data?.firstName ? data.firstName : this.firstName,
      data?.sur ? data.sur : this.sur,
      data?.age ? data.age : this.age
    );
  }
}
