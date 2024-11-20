import { LoginPageDecoratorV2, LoginPageV2 } from "./classv2";

let originalObject = new LoginPageV2();
let decoratedObject = new LoginPageDecoratorV2(originalObject);

originalObject.loginWithData("Dima", "qwerty");
decoratedObject.loginWithData("Not-Dima", "QWERTY");
decoratedObject.showCurrentUsername("Dima3");
