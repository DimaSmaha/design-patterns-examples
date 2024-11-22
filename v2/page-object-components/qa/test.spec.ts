import { ItemsPage } from "./items.page";
import { LoginPage } from "./login.page";
import { test, expect } from "@playwright/test";
test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    let itemsPage = new ItemsPage(page);

    await loginPage.login();
    await expect(await itemsPage.backpack()).toBeVisible();
    await itemsPage.addBackpack();
    await itemsPage.cartCounterShouldHaveCount(1);
    await expect(itemsPage.item.nthItemName(0)).toHaveText(
      "Sauce Labs Backpack"
    );
    await expect(itemsPage.item.nthItemPrice(0)).toHaveText("$29.99");
  });
});
