import { test, expect } from "@playwright/test";
import { LoginPage } from "./login.page";

test.describe("Test Test", () => {
  test("Test item by name", async ({ page, browserName }) => {
    let loginPage = new LoginPage(page, browserName);

    await loginPage.goto();
    await loginPage.fillUsername();
    await loginPage.fillPassword();
    await loginPage.clickLogin();
    await loginPage.checkErrorText();
  });
});
