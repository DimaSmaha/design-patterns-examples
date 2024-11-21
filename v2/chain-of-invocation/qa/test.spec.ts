import { LoginPage, usernameInput } from "./login.page";
import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();

    await loginPage.getElem(usernameInput).dIsVisible();
    await loginPage.dFill("ffff");
  });
});
