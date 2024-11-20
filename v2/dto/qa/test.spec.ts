import { LoginPage } from "./login.page";
import { test, expect } from "@playwright/test";
import { PersonDTO } from "./person.dto";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.fillUsername(PersonDTO);
    await loginPage.fillPassword(PersonDTO);
    await loginPage.clickLogin();
    await loginPage.errorIsVisible();
    PersonDTO.password = "secret_sauce";
    await loginPage.fillPassword(PersonDTO);
    await loginPage.clickLogin();
    await loginPage.inventoryIsVisible();
  });
});
