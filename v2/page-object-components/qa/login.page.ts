import { expect, Page } from "@playwright/test";
import { Person, PersonDTO } from "../../dto/qa/person.dto";

const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';
const error = '[data-test="error"]';
const item = '[id="item_4_title_link"]';

export class LoginPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
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

  async login() {
    await this.goto();
    await this.fillUsername(PersonDTO);
    PersonDTO.password = "secret_sauce";
    await this.fillPassword(PersonDTO);
    await this.clickLogin();
  }
}
