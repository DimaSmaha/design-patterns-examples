import { LoginPage } from "./login.page";
import { test, Locator } from "@playwright/test";
import { LoginDecorator } from "./loginDecorator";
import { PersonDTO } from "../../dto/qa/person.dto";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    let decorator = (locator: Locator) => new LoginDecorator(locator);

    await loginPage.goto();

    await decorator(await loginPage.usernameInput()).fill(PersonDTO.username);
    await decorator(await loginPage.passwordInput()).fill(PersonDTO.password);
    await decorator(await loginPage.loginBtn()).click();
  });
});
