import { LoginPage } from "./../../facade/qa/login.page";
import { PersonDTO } from "../../dto/qa/person.dto";

import { expect, Page } from "@playwright/test";
import { ItemsPage } from "./items.page";

export class Facade {
  readonly page: Page;
  constructor(page: Page) {
    this.page = page;
  }

  async loginAndAddBackback() {
    let loginPage = new LoginPage(this.page);
    let itemsPage = new ItemsPage(this.page);
    await loginPage.goto();
    await loginPage.fillUsername(PersonDTO);
    PersonDTO.password = "secret_sauce";
    await loginPage.fillPassword(PersonDTO);
    await loginPage.clickLogin();
    await itemsPage.addBackpack();
    await itemsPage.cartCounterShouldHaveCount(1);
  }
}
