import { PersonDTO } from "./../../dto/qa/person.dto";
import { test, expect } from "@playwright/test";
import { PageFactory } from "./factory.page";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let factory = new PageFactory(page);

    await factory.loginPage.goto();
    await factory.loginPage.fillUsername(PersonDTO);
    PersonDTO.password = "secret_sauce";
    await factory.loginPage.fillPassword(PersonDTO);
    await factory.loginPage.clickLogin();
    await factory.itemsPage.addBackpack();
    await factory.itemsPage.cartCounterShouldHaveCount(1);
  });
});
