import { expect, Page } from "@playwright/test";

export class GeneralActions {
  readonly page: Page;
  locator: any;

  constructor(page: Page) {
    this.page = page;
  }

  withEl(el: string) {
    this.locator = el;
    return this;
  }

  async clickEl() {
    await this.page.locator(this.locator).click();
  }

  async fillEl(str: string) {
    await this.page.locator(this.locator).fill(str);
  }

  async isVisible() {
    await expect(this.page.locator(this.locator)).toBeVisible();
  }
}
