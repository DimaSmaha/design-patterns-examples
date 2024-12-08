import { LoginPage } from "./login.page";
import { test } from "@playwright/test";
import { goodUser } from "./user.builder";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.fillUsername(goodUser);
    await loginPage.fillPassword(goodUser);
    await loginPage.clickLogin();
  });
});
