import { AddPassword, AddUsername, Person } from "./person.command";
import { LoginPage } from "./login.page";
import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let loginPage = new LoginPage(page);
    let pers = new Person();
    pers.addField("username", new AddUsername("standard_user"));
    pers.addField("password", new AddPassword("secret_sauce"));
    await loginPage.goto();
    await loginPage.fillUsername(pers);
    await loginPage.fillPassword(pers);
    await loginPage.clickLogin();
    await loginPage.inventoryIsVisible();
  });
});
