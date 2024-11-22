import { Page } from "@playwright/test";
import { PersonDTO } from "../../dto/qa/person.dto";

const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

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
