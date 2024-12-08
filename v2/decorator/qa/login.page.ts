import { Page } from "@playwright/test";
import { PersonDTO } from "../../dto/qa/person.dto";

export const usernameInput = '[data-test="username"]';
export const passwordInput = '[data-test="password"]';
export const loginButton = '[data-test="login-button"]';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async getLocator(el: string) {
    return this.page.locator(el);
  }
  usernameInput = async () => await this.getLocator(usernameInput);
  passwordInput = async () => await this.getLocator(passwordInput);
  loginBtn = async () => await this.getLocator(loginButton);
  // used to pass some specific or generic logic without any inheritance

  async goto() {
    await this.page.goto("");
  }

  async fillUserName() {
    await this.page.locator(usernameInput).fill(PersonDTO.username);
  }

  async fillPassword() {
    await this.page.locator(passwordInput).fill(PersonDTO.password);
  }

  async clickLoginButton() {
    this.page.locator(loginButton).click();
    return this;
  }

  async loginButton() {
    return this.page.locator(loginButton);
  }
}
