import { Facade } from "./facade.page";
import { test, expect } from "@playwright/test";

test.describe("Test Test", () => {
  test("Test Test", async ({ page }) => {
    let facade = new Facade(page);
    await facade.loginAndAddBackback();
  });
});
