import {
  LoggedInState,
  LoggedOutState,
  NotRegisteredState,
  UserStateExecution,
} from "./classes";

let loginState = new LoggedInState();
let logoutState = new LoggedOutState();
let notRegisteredState = new NotRegisteredState();

let getActions = new UserStateExecution(loginState);
getActions.loginAction();
getActions.changeState(logoutState);
getActions.loginAction();
getActions.getCurrentState();
getActions.changeState(notRegisteredState);
getActions.loginAction();
