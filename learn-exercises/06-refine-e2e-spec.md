# Exercise: Manually create a test spec

In the last exercise we generated a test spec using Codegen. This time let's add another test spec to the same file and refine our test to use 

## Task 1: Create a new test spec

- manually add a new test block under the test block we created in the last exercise
- add the test name "text field is cleared when item is added"
- navigate to the Todo Application: `https://demo.playwright.dev/todomvc/#/`
- add a new todo item "water the plants"
- assert that the placeholder text is empty using `toBeEmpty()`
- Run the test to see if it passes

## Task 2: Add a describe block

- add a describe block called `New Todo` 
- Move both tests into the describe block
- Run both tests in your describe block and make sure they are passing

## Task 3: Add a beforeEach hook

- Use a beforeEach hook to navigate to the Todo Application before each test
- Remove the `page.goto` from each test
- Run both tests in your describe block and make sure they are passing


## Task 4: Use BaseURL

- In the config file uncomment the `baseURL` and set it to `https://demo.playwright.dev/todomvc/#/`
- Back in the test file replace the URL with an empty string `''`
- Run both tests in your describe block and make sure they are passing


## Task 5: Create a reusable locator

- In both tests create a locator called `todoInput` and pass it the value `page.getByPlaceholder('What needs to be done?')`
- replace all instances of `page.getByPlaceholder('What needs to be done?')` with `todoInput`
- Run your tests again and make sure they are passing


Answers:

## Task 1: Create a new test spec

Your test file should now look like this:


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


test('text field is cleared when item is added', async ({ page}) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/')
  await page.getByPlaceholder('What needs to be done?').fill('water the plants');
  await page.getByPlaceholder('What needs to be done?').press('Enter');
  await expect(page.getByPlaceholder('What needs to be done?')).toBeEmpty();
})
```
## Task 2: Add a describe block

Your test file should now look like this:

```js
import { test, expect } from '@playwright/test';

test.describe('New Todo', () => {

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
  
  
  test('text field is cleared when item is added', async ({ page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
    await page.getByPlaceholder('What needs to be done?').fill('water the plants');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await expect(page.getByPlaceholder('What needs to be done?')).toBeEmpty();
  })
})
```

## Task 3: Add a beforeEach hook

Your test file should now look like this:

```js
import { test, expect } from '@playwright/test';

test.describe('New Todo', () => {

  test.beforeEach(async ({page}) => {
    await page.goto('https://demo.playwright.dev/todomvc/#/');
  })

  test('active and completed filters', async ({ page }) => {
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
  
  
  test('text field is cleared when item is added', async ({ page}) => {
    await page.getByPlaceholder('What needs to be done?').fill('water the plants');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await expect(page.getByPlaceholder('What needs to be done?')).toBeEmpty();
  })
})
```

## Task 4: Use BaseURL

Your test file should now look like this:

```js
import { test, expect } from '@playwright/test';

test.describe('New Todo', () => {

  test.beforeEach(async ({page}) => {
    await page.goto('');
  })

  test('active and completed filters', async ({ page }) => {
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
  
  
  test('text field is cleared when item is added', async ({ page}) => {
    await page.getByPlaceholder('What needs to be done?').fill('water the plants');
    await page.getByPlaceholder('What needs to be done?').press('Enter');
    await expect(page.getByPlaceholder('What needs to be done?')).toBeEmpty();
  })
})
```


Playwright Config file should look like this:

```js
...
use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://demo.playwright.dev/todomvc/#/',

  ...
}
```

## Task 5: Create a reusable locator

Your test file should now look like this:

```js
import { test, expect } from '@playwright/test';

test.describe('New Todo', () => {

  test.beforeEach(async ({page}) => {
    await page.goto('');
  })

  test('active and completed filters', async ({ page }) => {
    const todoInput = page.getByPlaceholder('What needs to be done?')
    await todoInput.fill('water the plants');
    await todoInput.press('Enter');
    await todoInput.fill('feed the dog');
    await todoInput.press('Enter');
    await page.locator('li').filter({ hasText: 'water the plants' }).getByLabel('Toggle Todo').check();
    await page.getByRole('link', { name: 'Active' }).click();
    await expect(page.getByTestId('todo-title')).toContainText('feed the dog');
    await page.getByRole('link', { name: 'Completed' }).click();
    await expect(page.getByTestId('todo-title')).toContainText('water the plants');
  });
  
  
  test('text field is cleared when item is added', async ({ page}) => {
    const todoInput = page.getByPlaceholder('What needs to be done?')
    await todoInput.fill('water the plants');
    await todoInput.press('Enter');
    await expect(page.getByPlaceholder('What needs to be done?')).toBeEmpty();
  })
})
```
