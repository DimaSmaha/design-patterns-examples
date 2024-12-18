import { expect, Locator, Page } from "@playwright/test";

const item = '[data-test="inventory-item"]';
const itemName = '[data-test="inventory-item-name"]';
const itemPrice = '[data-test="inventory-item-price"]';
const itemDescription = '[data-test="inventory-item-desc"]';
const itemAddToCart = "Add to cart";
const cartCounter = "[data-test='shopping-cart-badge']";

export class ItemsPage {
  readonly page: Page;
  currentItem: Locator;
  constructor(page: Page) {
    this.page = page;
  }

  async cartCounterShouldHaveCount(num: number) {
    await expect(this.page.locator(cartCounter)).toHaveText(`${num}`);
  }

  async getItemByNumber(nth: number) {
    this.currentItem = this.page.locator(item).nth(nth);
  }

  async itemName(text: string) {
    await expect(this.currentItem.locator(itemName)).toContainText(text);
  }

  async itemPrice(text: string) {
    await expect(this.currentItem.locator(itemPrice)).toContainText(text);
  }

  async itemDescription(text: string) {
    await expect(this.currentItem.locator(itemDescription)).toContainText(text);
  }

  itemAddToCart() {
    return this.currentItem.getByText(itemAddToCart);
  }

  //\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\

  async getItemByName(text: string) {
    this.currentItem = this.page
      .locator(itemName)
      .getByText(text, { exact: true })
      .locator("..")
      .locator("..")
      .locator("..")
      .locator("..");
  }
}
