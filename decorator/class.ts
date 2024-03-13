interface ILoginPage {
  username: string;
  password: string;
}

export class LoginPage implements ILoginPage {
  username: string;
  password: string;

  constructor(username: string, password: string) {
    (this.username = username), (this.password = password);
  }

  loginWithData() {
    console.log(
      `Logging in with username: ${this.username} and password: ${this.password}`
    );
  }
}

export class LoginPageDecorator implements ILoginPage {
  loginPage: LoginPage;
  username: string;
  password: string;

  constructor(loginPage: LoginPage) {
    this.loginPage = loginPage;
    this.username = loginPage.username;
    this.password = loginPage.password;
  }

  loginWithData() {
    console.log("Start login process");
    this.loginPage.loginWithData();
  }

  showCurrentUsername() {
    console.log(`Current name is ${this.username}`);
  }
}
