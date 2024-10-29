// @ts-check
const { test, expect } = require('@playwright/test');

test('Successful Login Test', async ({ page }) => {
  var username = "student";
  var password = "Password123";

  await page.goto('http://browserstacktraining.site');

  await page.locator("#loginButton").click();

  await page.locator("#username").fill(username);
  await page.locator("#password").fill(password);
  await page.locator("#submit").click();



  // Expect a title "to contain" a substring.
  await expect(page.locator("#message")).toHaveText("Login successful!");
});