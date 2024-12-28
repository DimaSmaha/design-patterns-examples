import { Person, PersonDTO } from "../../dto/qa/person.dto";
import { expect, Page } from "@playwright/test";
import { ILoginPage } from "./login.page";

export const usernameInput = '[data-test="username"]';
export const passwordInput = '[data-test="password"]';
export const loginButton = '[data-test="login-button"]';
export const error = '[data-test="error"]';
const item = '[id="item_4_title_link"]';

export class LoginPageFirefox implements ILoginPage {
  readonly page: Page;
  firefoxUser = "standard_user";
  firefoxPass = PersonDTO.password;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto("");
  }

  async fillUsername() {
    await this.page.locator(usernameInput).fill(this.firefoxUser);
  }

  async fillPassword() {
    await this.page.locator(passwordInput).fill(this.firefoxPass);
  }

  async clickLogin() {
    await this.page.locator(loginButton).click();
  }

  async checkErrorText(): Promise<void> {
    await expect(await this.page.locator(error)).toContainText(
      "Username and password do not match any user in this service"
    );
  }

  async errorIsVisible() {
    await expect(this.page.locator(error)).toBeVisible();
  }

  async inventoryIsVisible() {
    await expect(this.page.locator(item)).toBeVisible();
  }
}
