# Exercise: Run Example Test Spec

## Task 1: Run Playwright Test

## Task 2: View Test Report

## Task 3: View Test Configuration

## Task 4: View Test Specification

```js
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
```

## Task 5: Explore Contexts: `page`

## Task 6: Arrange with Navigation: `page.goto()`

## Task 7: Act with Locators: `page.getByRole()`

## Task 8: Assert with Expect: `expect(<locator>).toBeVisible()`
