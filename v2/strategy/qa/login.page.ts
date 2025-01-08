import { LoginPageFirefox } from "./login.firefox";
import { Page } from "@playwright/test";
import { LoginPageChrome } from "./login.chrome";

export const usernameInput = '[data-test="username"]';
export const passwordInput = '[data-test="password"]';
export const loginButton = '[data-test="login-button"]';
export const error = '[data-test="error"]';

export interface ILoginPage {
  goto(): Promise<void>;
  fillUsername(): Promise<void>;
  fillPassword(): Promise<void>;
  clickLogin(): Promise<void>;
  checkErrorText(): Promise<void>;
}

export class LoginPage implements ILoginPage {
  strategy: ILoginPage | null = null;

  constructor(page: Page, browserName: string) {
    if (browserName === "chromium") {
      this.strategy = new LoginPageChrome(page);
    }
    if (browserName === "firefox") {
      this.strategy = new LoginPageFirefox(page);
    }
  }

  async goto(): Promise<void> {
    await this.strategy?.goto();
  }
  async fillUsername(): Promise<void> {
    await this.strategy?.fillUsername();
  }
  async fillPassword(): Promise<void> {
    await this.strategy?.fillPassword();
  }
  async clickLogin(): Promise<void> {
    await this.strategy?.clickLogin();
  }
  async checkErrorText(): Promise<void> {
    await this.strategy?.checkErrorText();
  }
}
