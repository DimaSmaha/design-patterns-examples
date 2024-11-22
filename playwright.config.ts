import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testDir: "./v2/dto/qa",
  // testDir: "./v2/chain-of-invocation/qa",
  // testDir: "./v2/buider/qa",
  // testDir: "./v2/delegate/qa",
  // testDir: "./v2/singletone/qa",
  // testDir: "./v2/facade/qa",
  testDir: "./v2/decorator/qa",

  timeout: 300000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: "html",
  use: {
    baseURL: "https://www.saucedemo.com/",
    browserName: "chromium",
    locale: "en-GB",
    actionTimeout: 650,
    trace: "on",
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    launchOptions: { slowMo: 1000 },
  },
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
};
export default config;
