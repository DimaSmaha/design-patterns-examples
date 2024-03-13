interface UserState {
  loginAction(): void;
}

export class LoggedInState implements UserState {
  loginAction() {
    console.log("====================================");
    console.log("IM LOGGED IN USER");
    console.log("im checking that im on the profile page");
    console.log("i dont need to login");

    console.log(
      "im checKing that im on the profile page to continue test execution"
    );
    console.log("====================================");
  }
}

export class LoggedOutState implements UserState {
  loginAction() {
    console.log("====================================");
    console.log("IM LOGGED OUT USER");
    console.log("im checking that im on the login page");
    console.log("i need to login");
    console.log("im loggin in");

    console.log(
      "im checKing that im on the profile page to continue test execution"
    );
    console.log("====================================");
  }
}

export class NotRegisteredState implements UserState {
  loginAction() {
    console.log("====================================");
    console.log("IM NOT REGISTERED USER");
    console.log("im that im on the home page");
    console.log("i need to register");
    console.log("im registering");

    console.log(
      "im checking that im on the profile page to continue test execution"
    );
    console.log("====================================");
  }
}

export class UserStateExecution implements UserState {
  state: UserState;

  constructor(state: UserState) {
    this.state = state;
  }

  loginAction(): void {
    this.state.loginAction();
  }

  changeState(state: UserState): void {
    this.state = state;
    console.log("====================================");
    console.log(`The state was changed to ${this.state}`);
    console.log("====================================");
  }

  getCurrentState() {
    console.log("====================================");
    console.log(`The current state is ${this.state}`);
    console.log("====================================");
  }
}

// constructor(passedState: string) {
//     switch (passedState) {
//       case "loginState":
//         this.state = new LoggedInState();
//         break;
//       case "logoutState":
//         this.state = new LoggedOutState();
//         break;
//       case "notRegisteredState":
//         this.state = new NotRegisteredState();
//         break;
//       default:
//         console.log("THIS STATE IS NOT IMPLEMENTED");
//     }
//   }

// class UserStateExecution implements UserState {
//   state: UserState;

//   constructor() {
//     this.state = new NotRegisteredState();
//   }

//   loginAction(): void {
//     this.state.loginAction();
//   }

//   changeState(state: UserState): void {
//     this.state = state;
//     console.log(`The state was changed to ${state}`);
//   }
// }

// let getActions = new UserStateExecution()
// getActions.changeState(new LoggedInState());

// let getActions = new UserStateExecution().loginAction();
// getActions.changeState(new LoggedInState());   // not possible because previous row returns void, it just returns the funtion output, and not the object
