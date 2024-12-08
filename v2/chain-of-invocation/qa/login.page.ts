import { expect, Locator, Page } from "@playwright/test";

export const usernameInput = '[data-test="username"]';
export const passwordInput = '[data-test="password"]';
export const loginButton = '[data-test="login-button"]';
export const error = '[data-test="error"]';
export const item = '[id="item_4_title_link"]';

export class LoginPage {
  private locator: Locator;

  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("");
  }

  // its reasonable to make a coi, when we need to make a few actions over one element,
  // and to create a generic functions

  getElem(getLocator: string) {
    this.locator = this.page.locator(getLocator);
    return this;
  }

  async elFill(str: string) {
    await this.locator.fill(str);
    return this;
  }

  async elClick() {
    await this.locator.click();
    return this;
  }

  async elIsVisible() {
    await expect(this.locator).toBeVisible();
    return this;
  }
}
