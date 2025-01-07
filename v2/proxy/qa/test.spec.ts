import { LoginProxy } from "./login.proxy";
import { LoginPage } from "./login.page";
import { test, expect } from "@playwright/test";
import { PersonDTO } from "../../dto/qa/person.dto";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    let loginProxy = new LoginProxy(page);
    await loginPage.goto();
    // PersonDTO.username = "error_user";
    await loginProxy.login(PersonDTO);
    await loginPage.errorIsVisible();
    PersonDTO.password = "secret_sauce";
    await loginPage.fillPassword(PersonDTO);
    await loginPage.clickLogin();
    await loginPage.inventoryIsVisible();
  });
});
