import { test, expect } from "@playwright/test";
import { GetCatToken } from "./singleton";

const users = "api/users";

test.describe("Reqres API test suite", async () => {
  test.use({
    baseURL: "https://reqres.in/",
    extraHTTPHeaders: {
      "Content-Type": "application/json",
      Accept: `application/json`,
    },
  });

  test("Create a user", async ({ request }) => {
    let token = await GetCatToken.getCatToken();
    const userRequest = await request.post(`${users}`, {
      data: { name: "Dima", job: `${token}` },
    });
    expect(userRequest.status()).toEqual(201);

    let body = await userRequest.json();
    let token2 = await GetCatToken.getCatToken();
    console.log(token2);
    expect(await body.job).toEqual(token2);
    expect(await body.createdAt).toContain("2025");
  });

  test("update a user", async ({ request }) => {
    let token = await GetCatToken.getCatToken();
    const userRequest = await request.put(`${users}/2`, {
      data: { name: "Dima", job: `${token}` },
    });
    expect(userRequest.status()).toEqual(200);

    let body = await userRequest.json();
    let token3 = await GetCatToken.getCatToken();
    console.log(token3);
    expect(await body.job).toEqual(token3);
    expect(await body).toHaveProperty("updatedAt");
  });
});
