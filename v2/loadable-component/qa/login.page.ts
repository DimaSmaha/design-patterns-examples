import { Person } from "../../dto/qa/person.dto";
import { expect, Page } from "@playwright/test";
import { isLoadable } from "./loadable.component";

const usernameInput = '[data-test="username"]';
const passwordInput = '[data-test="password"]';
const loginButton = '[data-test="login-button"]';
const error = '[data-test="error"]';
const item = '[id="item_4_title_link"]';

/** export class LoginPage extends ItemsPage implements isLoadable<Promise<void>>  We can implement and extend */

/**
 * This interface forces us to have an isLoaded() method in each PageObject,
 * so we will vefity that this page is loaded and ready for test before making some actions
 * We can verify either locators are visible either some requests fullfilled, before making actions
 */

export class LoginPage implements isLoadable<Promise<void>> {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async isLoaded(): Promise<void> {
    await expect(this.page.locator(usernameInput)).toBeVisible();
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
