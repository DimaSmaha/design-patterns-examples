import { expect, Locator } from "@playwright/test";

const itemName = '[data-test="inventory-item-name"]';
const itemPrice = '[data-test="inventory-item-price"]';
const itemDescription = '[data-test="inventory-item-desc"]';

export class AssertItems {
  currentItem: Locator;

  constructor(currentItem) {
    this.currentItem = currentItem;
  }

  async itemNameToBe(text: string) {
    await expect(this.currentItem.locator(itemName)).toContainText(text);
  }

  async itemPriceToBe(text: string) {
    await expect(this.currentItem.locator(itemPrice)).toContainText(text);
  }

  async itemDescriptionToBe(text: string) {
    await expect(this.currentItem.locator(itemDescription)).toContainText(text);
  }
}
