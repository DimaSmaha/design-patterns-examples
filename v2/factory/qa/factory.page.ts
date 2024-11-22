import { LoginPage } from "./login.page";
import { expect, Page } from "@playwright/test";
import { ItemsPage } from "./items.page";

export class PageFactory {
  readonly page: Page;
  readonly pageType: "loginPage" | "itemsPage";
  readonly loginPage: LoginPage;
  readonly itemsPage: ItemsPage;

  constructor(page: Page) {
    this.page = page;
    this.loginPage = new LoginPage(this.page);
    this.itemsPage = new ItemsPage(this.page);
  }
}
