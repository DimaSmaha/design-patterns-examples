import { PersonDTO } from "../../dto/qa/person.dto";
import { test, expect } from "@playwright/test";
import { PageFactory } from "./factory.page";

test.describe("Test Fact", () => {
  test("Test Test", async ({ page }) => {
    let loginP: any = new PageFactory(page).getPage("loginPage");
    let itemsP: any = new PageFactory(page).getPage("itemsPage");

    await loginP.goto();
    await loginP.fillUsername(PersonDTO);
    PersonDTO.password = "secret_sauce";
    await loginP.fillPassword(PersonDTO);
    await loginP.clickLogin();
    await itemsP.addBackpack();
    await itemsP.cartCounterShouldHaveCount(1);
  });
});
