import { LoginPage, LoginPageDecorator } from "./class";

let originalObject = new LoginPage("Dima", "qwerty");
let decoratedObject = new LoginPageDecorator(originalObject);

originalObject.loginWithData();
decoratedObject.loginWithData();
decoratedObject.showCurrentUsername();
