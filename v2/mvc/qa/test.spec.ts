import { test, defineConfig } from "@playwright/test";
import { UsersController } from "./controllers/users.controller";
import { createSingleUserSchema, getSingleUserSchema } from "./dtos/users.dto";
// ** This tests have separate config
test.describe("Test API", () => {
  test.use({
    baseURL: "https://reqres.in/",
    extraHTTPHeaders: {
      "Content-Type": "application/json",
      Accept: `application/json`,
    },
  });

  test("Test GET Requests", async ({ page }) => {
    let users = new UsersController(page);

    let resp = await users.getSingleUser("2");
    await resp.assert.statusToBe(200);
    await resp.assert.bodyContains("janet.weaver@reqres.in");
    await resp.assert.toHaveJsonSchema(getSingleUserSchema);
    //add JSON schema validation
  });

  test("Test POST Requests", async ({ page }) => {
    let users = new UsersController(page);

    let resp = await users.createSingleUser();
    await resp.assert.statusToBe(201);
    await resp.assert.bodyPropertyContains("job", "leader");
    await resp.assert.toHaveJsonSchema(createSingleUserSchema);

    let resp2 = await users.createSingleUser({ name: "Dima", job: "Witcher" });
    await resp2.assert.statusToBe(201);
    await resp2.assert.bodyPropertyContains("name", "Dima");
    await resp2.assert.bodyPropertyContains("job", "Witcher");
    await resp2.assert.toHaveJsonSchema(createSingleUserSchema);
  });
});
