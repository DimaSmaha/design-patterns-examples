import { LoginPage } from "./login.page";
import { test, expect } from "@playwright/test";
import { PersonDTO } from "./person.dto";
import { Logger } from "./logger";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let logger = new Logger();
    let loginPage = new LoginPage(page);
    logger.subscribe(logger.log);

    await logger.broadcast("Logging to the webiste");
    await loginPage.goto();
    await logger.broadcast("Filling username");
    await loginPage.fillUsername(PersonDTO);
    await logger.broadcast("Filling password");
    await loginPage.fillPassword(PersonDTO);
    await logger.broadcast("Clicking login");
    await loginPage.clickLogin();
    await logger.broadcast("Show error");
    await loginPage.errorIsVisible();
    PersonDTO.password = "secret_sauce";
    await loginPage.fillPassword(PersonDTO);
    await loginPage.clickLogin();
    await loginPage.inventoryIsVisible();
  });
});
