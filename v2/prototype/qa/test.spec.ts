import { defaultUser } from "./person.proto";
import { error, LoginPage } from "./login.page";
import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    await loginPage.goto();
    let otherUser = defaultUser.copy({ username: "locked_out_user" });
    await loginPage.fillUsername(otherUser);
    await loginPage.fillPassword(otherUser);
    await loginPage.clickLogin();
    await loginPage.errorIsVisible();
    await expect(page.locator(error)).toContainText(
      "Sorry, this user has been locked out."
    );
  });
});
