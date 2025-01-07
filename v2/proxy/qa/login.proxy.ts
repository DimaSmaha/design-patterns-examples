import { Page } from "@playwright/test";
import { Person } from "../../dto/qa/person.dto";
import { Login } from "./login";

export class LoginProxy {
  loginPage: Login;
  constructor(page: Page) {
    this.loginPage = new Login(page);
  }

  async login(data: Person) {
    if (data.username === "standard_user") {
      await this.loginPage.login(data);
      return;
    }
    throw new Error("Incorrect User");
  }
}
