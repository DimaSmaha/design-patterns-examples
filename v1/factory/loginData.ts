interface ILoginData {
  name: string;
  password: string;
}

export class LoginData implements ILoginData {
  constructor(name: string, password: string) {
    (this.name = name), (this.password = password);
  }
  name: string;
  password: string;
}
