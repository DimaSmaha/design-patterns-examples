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

  // Basically we are expanding already written methods
  // We can do it either by writing the function with already existing method
  async clickLoginWithVerification() {
    await expect(await this.loginPage.loginButton()).toBeVisible();
    await expect(await this.loginPage.loginButton()).toHaveText("Login");
    await this.loginPage.clickLoginButton();
    return this;
  }

  // Or to pass a locatotr and expand a function by yourself
  async clickLoginWithVerificationLocator() {
    await expect(this.page.locator(this.element)).toBeVisible();
    await expect(this.page.locator(this.element)).toHaveText("Login");
    await this.page.locator(this.element).click();
    return this;
  }
}
