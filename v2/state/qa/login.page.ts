import { Person } from "../../dto/qa/person.dto";
import { expect, Page } from "@playwright/test";
import { GeneralActions } from "./generalActions.page";

export const usernameInput = '[data-test="username"]';
export const passwordInput = '[data-test="password"]';
export const loginButton = '[data-test="login-button"]';
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
}
