import { expect, Locator } from "@playwright/test";

//** Passing a state of current locator, and reuse extended methods */
export class LoginDecorator {
  locator: Locator;
  constructor(locator: Locator) {
    this.locator = locator;
  }

  async fill(str: string) {
    await this.locator.clear();
    await expect(this.locator).toBeEmpty();
    await this.locator.fill(str);
    return this;
  }

  async click() {
    await expect(this.locator).toBeVisible();
    await this.locator.click();
    return this;
  }
}
