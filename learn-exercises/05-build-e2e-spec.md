# Exercise 5: Create a Test Spec with Codegen

In this exercise, you'll create a test spec for the Todo Application using Playwright's code generator, Codegen.

- navigate to the Todo Application: https://demo.playwright.dev/todomvc/#/
- add a new todo item "water the plants"
- add another todo item "feed the dog"
- toggle the "water the plants" todo as done
- click on the active button
- assert that the todo field contains the text "feed the dog"
- click on the completed filter
- assert that the todo field contains the text "water the plants"
- change the test name to `active and completed filters`
- save the test file as `todo.spec.ts`
- run the test with trace viewer selected and make sure it passes

Answer:

```js
import { test, expect } from '@playwright/test';

test('active and completed filters', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').fill('water the plants');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.getByPlaceholder('What needs to be done?').fill('feed the dog');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await page.locator('li').filter({ hasText: 'water the plants' }).getByLabel('Toggle Todo').check();
  await page.getByRole('link', { name: 'Active' }).click();
  await expect(page.getByTestId('todo-title')).toContainText('feed the dog');
  await page.getByRole('link', { name: 'Completed' }).click();
  await expect(page.getByTestId('todo-title')).toContainText('water the plants');
});
```
