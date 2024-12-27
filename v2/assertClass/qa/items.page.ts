import { expect, Locator, Page } from "@playwright/test";
import { AssertItems } from "./items.assert";

const item = '[data-test="inventory-item"]';
const itemName = '[data-test="inventory-item-name"]';
const itemAddToCart = "Add to cart";
const cartCounter = "[data-test='shopping-cart-badge']";

export class ItemsPage {
  readonly page: Page;
  currentItem: Locator;
  assert: AssertItems;
  constructor(page: Page) {
    this.page = page;
  }

  async cartCounterShouldHaveCount(num: number) {
    await expect(this.page.locator(cartCounter)).toHaveText(`${num}`);
  }

  async getItemByNumber(nth: number) {
    this.currentItem = this.page.locator(item).nth(nth);
    this.assert = new AssertItems(this.currentItem);
  }

  async getItemByName(text: string) {
    this.currentItem = this.page
      .locator(itemName)
      .getByText(text, { exact: true })
      .locator("..")
      .locator("..")
      .locator("..")
      .locator("..");
    this.assert = new AssertItems(this.currentItem);
  }

  itemAddToCart() {
    return this.currentItem.getByText(itemAddToCart);
  }
}
