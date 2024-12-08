import { Page } from "@playwright/test";
import { User } from "./user.builder";

const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("");
  }

  async fillUsername(goodUser: User) {
    await this.page.locator(usernameInput).fill(goodUser.userName);
  }

  async fillPassword(goodUser: User) {
    await this.page.locator(passwordInput).fill(goodUser.password);
  }

  async clickLogin() {
    await this.page.locator(loginButton).click();
  }
}
