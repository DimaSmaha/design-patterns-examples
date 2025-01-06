interface IUser {
  login(auth?: string): void;
  logout(): void;
}

export class User implements IUser {
  login() {
    console.log("The user is logged in");
  }

  logout() {
    console.log("The user is logged out");
  }
}

export class UserProxy implements IUser {
  auth = "pass";
  user: User;
  constructor(user: User) {
    this.user = user;
  }

  login(userAuth: string) {
    if (userAuth == this.auth) {
      this.user.login();
      return;
    }
    console.log("Incorrect Auth");
  }

  logout() {
    this.user.logout();
  }
}
