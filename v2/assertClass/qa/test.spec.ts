import { test, expect } from "@playwright/test";
import { PersonDTO } from "../../dto/qa/person.dto";
import { ItemsPage } from "./items.page";
import { LoginPage } from "./login.page";

test.describe("Test Test", () => {
  const itemNameTwo = "Sauce Labs Bolt T-Shirt";
  const itemDescriptionTwo =
    "Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray";
  const itemPriceTwo = "$15.99";

  test("Test item by name", async ({ page }) => {
    let loginPage = new LoginPage(page);
    let itemsPage = new ItemsPage(page);
    await loginPage.goto();
    await loginPage.fillUsername(PersonDTO);
    PersonDTO.password = "secret_sauce";
    await loginPage.fillPassword(PersonDTO);
    await loginPage.clickLogin();
    await loginPage.inventoryIsVisible();

    await itemsPage.getItemByName(itemNameTwo);
    await itemsPage.assert.itemNameToBe(itemNameTwo);
    await itemsPage.assert.itemDescriptionToBe(itemDescriptionTwo);
    await itemsPage.assert.itemPriceToBe(itemPriceTwo);
    await itemsPage.itemAddToCart().click();

    await itemsPage.cartCounterShouldHaveCount(1);
  });
});
