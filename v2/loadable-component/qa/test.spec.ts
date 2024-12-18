import { test, expect } from "@playwright/test";
import { PersonDTO } from "../../dto/qa/person.dto";
import { ItemsPage } from "./items.page";
import { LoginPage } from "./login.page";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    let itemsPage = new ItemsPage(page);

    await loginPage.goto();
    await loginPage.isLoaded();
    await loginPage.fillUsername(PersonDTO);
    PersonDTO.password = "secret_sauce";
    await loginPage.fillPassword(PersonDTO);
    await loginPage.clickLogin();
    await itemsPage.addBackpack();
    await itemsPage.cartCounterShouldHaveCount(1);
  });
});
