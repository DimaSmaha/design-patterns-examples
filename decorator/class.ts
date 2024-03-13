/**
 * We use decorator in order to extent the behavior of class,
 * by not changing it, but rather creating a new class, and write a behavior there
 * Its one of the SOLID principles. Open-closed to be exact.
 *
 * Basically we are creating some class with some behavior,
 * and when we need to extend this behavior, we will simply, create a new class
 * and put an exisiting instance of the first class as an argument in constructor,
 * in order to get access to all methods and properties of the first class,
 * and to be able to extend the functionality for this decorator class.
 */

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
