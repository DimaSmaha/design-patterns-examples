import { IPerson } from "./person.proto";
import { expect, Page } from "@playwright/test";

const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';
export const error = '[data-test="error"]';
const item = '[id="item_4_title_link"]';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("");
  }

  async fillUsername(personProto: IPerson) {
    await this.page.locator(usernameInput).fill(personProto.username);
  }

  async fillPassword(personProto: IPerson) {
    await this.page.locator(passwordInput).fill(personProto.password);
  }

  async clickLogin() {
    await this.page.locator(loginButton).click();
  }

  async errorIsVisible() {
    await expect(this.page.locator(error)).toBeVisible();
  }

  async inventoryIsVisible() {
    await expect(this.page.locator(item)).toBeVisible();
  }
}
