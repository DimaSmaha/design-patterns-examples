import { test, expect } from "@playwright/test";
import { PersonDTO } from "../../dto/qa/person.dto";
import { ItemsPage } from "./items.page";
import { LoginPage } from "./login.page";

test.describe("Test Test", () => {
  const itemNameOne = "Sauce Labs Backpack";
  const itemDescriptionOne = "carry.allTheThings() with the sleek";
  const itemPriceOne = "$29.99";
  const itemNameTwo = "Sauce Labs Bolt T-Shirt";
  const itemDescriptionTwo =
    "Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray";
  const itemPriceTwo = "$15.99";

  test("Test item by number", async ({ page }) => {
    let loginPage = new LoginPage(page);
    let itemsPage = new ItemsPage(page);
    await loginPage.goto();
    await loginPage.fillUsername(PersonDTO);
    PersonDTO.password = "secret_sauce";
    await loginPage.fillPassword(PersonDTO);
    await loginPage.clickLogin();
    await loginPage.inventoryIsVisible();

    await itemsPage.getItemByNumber(0);
    await itemsPage.itemName(itemNameOne);
    await itemsPage.itemDescription(itemDescriptionOne);
    await itemsPage.itemPrice(itemPriceOne);
    await itemsPage.itemAddToCart().click();

    await itemsPage.getItemByNumber(2);
    await itemsPage.itemName(itemNameTwo);
    await itemsPage.itemDescription(itemDescriptionTwo);
    await itemsPage.itemPrice(itemPriceTwo);
    await itemsPage.itemAddToCart().click();

    await itemsPage.cartCounterShouldHaveCount(2);
  });

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
    await itemsPage.itemName(itemNameTwo);
    await itemsPage.itemDescription(itemDescriptionTwo);
    await itemsPage.itemPrice(itemPriceTwo);
    await itemsPage.itemAddToCart().click();

    await itemsPage.cartCounterShouldHaveCount(1);
  });
});
