import { expect, Page } from "@playwright/test";

const cartCounter = "[data-test='shopping-cart-badge']";
const addBackpack = "[data-test='add-to-cart-sauce-labs-backpack']";

export class ItemsPage {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async addBackpack() {
    await this.page.locator(addBackpack).click();
  }

  async cartCounterShouldHaveCount(num: number) {
    await expect(this.page.locator(cartCounter)).toHaveText(`${num}`);
  }
}
