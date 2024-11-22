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
  }

  getPage(pageType: "loginPage" | "itemsPage") {
    switch (pageType) {
      case "loginPage":
        return new LoginPage(this.page);
        break;
      case "itemsPage":
        return new ItemsPage(this.page);
        break;
    }
  }
}
