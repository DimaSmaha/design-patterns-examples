import { loginButton, LoginPage } from "./login.page";
import { test, expect } from "@playwright/test";
import { Decorator } from "./decorator";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    let decorator = new Decorator(page);
    await loginPage.goto();

    await loginPage.fillUserName();
    await loginPage.fillPassword();
    await decorator.clickLoginWithVerification();
  });

  test("Test Test2", async ({ page }) => {
    let loginPage = new LoginPage(page);
    let decorator = new Decorator(page, loginButton);
    await loginPage.goto();

    await loginPage.fillUserName();
    await loginPage.fillPassword();
    await decorator.clickLoginWithVerificationLocator();
  });
});
