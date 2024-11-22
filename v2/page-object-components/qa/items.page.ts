import { expect, Page } from "@playwright/test";
import { ItemsComponent } from "./items.components";

const cartCounter = "[data-test='shopping-cart-badge']";
const addBackpack = "[data-test='add-to-cart-sauce-labs-backpack']";

export class ItemsPage {
  readonly page: Page;
  readonly item: ItemsComponent;
  constructor(page: Page) {
    this.page = page;
    this.item = new ItemsComponent(this.page);
  }

  async backpack() {
    return this.page.locator(addBackpack);
  }

  async addBackpack() {
    await this.item.nthAddToCartBtn(0).click();
  }

  async cartCounterShouldHaveCount(num: number) {
    await expect(this.page.locator(cartCounter)).toHaveText(`${num}`);
  }
}
