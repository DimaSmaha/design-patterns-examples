import { expect, Locator, Page } from "@playwright/test";
import { LoginPage } from "./login.page";

export class Decorator {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly element: string;

  constructor(page: Page, element: string = "") {
    this.page = page;
    this.element = element;
    this.loginPage = new LoginPage(page);
  }

  async clickLoginWithVerification() {
    await expect(await this.loginPage.loginButton()).toBeVisible();
    await expect(await this.loginPage.loginButton()).toHaveText("Login");
    await this.loginPage.clickLoginButton();
    return this;
  }

  async clickLoginWithVerificationLocator() {
    await expect(this.page.locator(this.element)).toBeVisible();
    await expect(this.page.locator(this.element)).toHaveText("Login");
    await this.page.locator(this.element).click();
    return this;
  }
}
