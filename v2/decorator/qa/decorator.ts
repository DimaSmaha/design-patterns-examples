import { expect, Page } from "@playwright/test";
import { LoginPage } from "./login.page";

export class Decorator {
  readonly page: Page;
  readonly loginPage: LoginPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(page);
  }

  async clickLoginWithVerification() {
    await expect(await this.loginPage.loginButton()).toBeVisible();
    await expect(await this.loginPage.loginButton()).toHaveText("Login");
    await this.loginPage.clickLoginButton();
    return this;
  }
}
