export class LoginPageV2 {
  loginWithData(username: string, password: string) {
    console.log(
      `Logging in with username: ${username} and password: ${password}`
    );
  }
}

export class LoginPageDecoratorV2 {
  loginPage: LoginPageV2;

  constructor(loginPage: LoginPageV2) {
    this.loginPage = loginPage;
  }

  loginWithData(username: string, password: string) {
    console.log("Start login process");
    this.loginPage.loginWithData(username, password);
  }

  showCurrentUsername(username: string) {
    console.log(`Current name is ${username}`);
  }
}
