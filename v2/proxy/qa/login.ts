import { Person } from "./../../dto/qa/person.dto";
import { Page } from "@playwright/test";
import { LoginPage } from "./login.page";

export class Login {
  loginPage: LoginPage;
  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
  }

  async login(data: Person) {
    await this.loginPage.fillUsername(data);
    await this.loginPage.fillPassword(data);
    await this.loginPage.clickLogin();
  }
}
