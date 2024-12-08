import { loginButton, LoginPage, usernameInput } from "./login.page";
import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();

    /**
     * We can not chain all the time since all the other functions
     * except the get element functions are async
     * so we can rather set a state and reuse this state over the next functions in new line
     */

    // await loginPage.getElem(usernameInput).dIsVisible();

    loginPage.getElem(usernameInput);
    await loginPage.elIsVisible();
    await loginPage.elFill("ffff");

    loginPage.getElem(loginButton);
    await loginPage.elIsVisible();
    await loginPage.elClick();
  });
});
