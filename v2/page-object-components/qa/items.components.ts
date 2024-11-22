import { expect, Page } from "@playwright/test";

const addToCart = ".btn_inventory";
const itemName = '[data-test="inventory-item-name"]';
const itemPrice = '[data-test="inventory-item-price"]';

export class ItemsComponent {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  getAddToCartBtn() {
    return this.page.locator(addToCart);
  }

  nthItemName(eq: number) {
    return this.page.locator(itemName).nth(eq);
  }

  nthItemPrice(eq: number) {
    return this.page.locator(itemPrice).nth(eq);
  }

  nthAddToCartBtn(eq: number) {
    return this.getAddToCartBtn().nth(eq);
  }
}
