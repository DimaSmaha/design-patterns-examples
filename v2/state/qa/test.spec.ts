import { test, expect } from "@playwright/test";
import { PersonDTO } from "../../dto/qa/person.dto";
import { GeneralActions } from "./generalActions.page";
import { ItemsPage } from "./items.page";
import {
  loginButton,
  LoginPage,
  passwordInput,
  usernameInput,
} from "./login.page";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let actions = new GeneralActions(page);
    let loginPage = new LoginPage(page);
    let itemsPage = new ItemsPage(page);

    await loginPage.goto();
    actions.withEl(usernameInput);
    await actions.isVisible();
    await actions.fillEl("standard_user");
    actions.withEl(passwordInput);
    await actions.fillEl("secret_sauce");
    actions.withEl(loginButton);
    await actions.clickEl();

    await itemsPage.addBackpack();
    await itemsPage.cartCounterShouldHaveCount(1);
  });
});
