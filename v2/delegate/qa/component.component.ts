import { Page } from "@playwright/test";

const loginButton = '[data-test="login-button"]';

export class ButtonComponent {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async clickLoginButton() {
    this.page.locator(loginButton).click();
    return this;
  }

  clickNotLoginButton() {
    this.page.locator(loginButton).click();
    return this;
  }
}
