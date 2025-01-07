import { Person } from "../qa/person.dto";
import { expect, Page } from "@playwright/test";
import { Logger } from "./logger";

const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';
const error = '[data-test="error"]';
const item = '[id="item_4_title_link"]';

export class LoginPage {
  readonly page: Page;
  logger: Logger;
  constructor(page: Page) {
    this.page = page;
    this.logger = new Logger();
  }

  async goto() {
    await this.page.goto("");
  }

  async fillUsername(personDTO: Person) {
    await this.page.locator(usernameInput).fill(personDTO.username);
  }

  async fillPassword(personDTO: Person) {
    await this.page.locator(passwordInput).fill(personDTO.password);
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
