/*  in general we would use a factory for eg to initialize a pages. 
basically you would write new LoginPage, new RegisterPage
Then you would make the next in your spec file
new Factory.getPage("loginPage").someMethod
Also u can check a browserDriver factory here
https://github.com/DimaSmaha/selenide-java-graddle
*/

import { LoginData } from "./loginData";
import { RegistrationData } from "./registrationData";

export class Factory {
  public getData(dataType: string) {
    switch (dataType) {
      case "loginData":
        return new LoginData("Dima", "123");
        break;
      case "registrationData":
        return new RegistrationData("Dima", "321", 20);
        break;
      default:
        console.log("NOT COVERED DATA");
        break;
    }
  }
}
