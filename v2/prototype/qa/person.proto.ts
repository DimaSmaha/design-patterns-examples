export interface IPerson {
  username: string;
  password: string;
  age?: number;
}

class PersonProto implements IPerson {
  username: string;
  password: string;
  age?: number | undefined;

  constructor(userName: string, password: string, age?: number) {
    this.username = userName;
    this.password = password;
    if (age) {
      this.age = age;
    }
  }

  copy(data?: Partial<IPerson>) {
    return new PersonProto(
      data?.username ? data.username : this.username,
      data?.password ? data.password : this.password,
      data?.age ? data.age : this.age
    );
  }
}

export const defaultUser = new PersonProto("standard_user", "secret_sauce");
