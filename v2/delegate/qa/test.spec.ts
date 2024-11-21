import { LoginPage } from "./login.page";
import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.fillUserName();
    await loginPage.fillPassword();
    await loginPage.buttons.clickLoginButton();
  });
});
