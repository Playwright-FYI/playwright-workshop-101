import { test, expect, type Page } from '@playwright/test';

// Data fixtures for testing.
const TODO_ITEMS = [
  "buy some cheese",
  "feed the cat",
  "book a doctors appointment",
];

// TODO-01: Replace this with the local devserver URL.
test.beforeEach(async ({ page }) => {
  // Arrange: Set state before each test
});

// TEST SUITE #1 - Adding a New ToDo Item
test.describe('New Todo', () => {

  // TODO-02: Write Test Spec
  test.skip("should allow me to add todo items", async ({ page }) => {
    // Arrange: Create a new todo locator
    // Act: Create 1st todo.
    // Assert: Make sure the list only has one todo item.
    // Act: Create 2nd todo.
    // Assert: Make sure the list now has two todo items.
  });

  // TODO-03: Write Test Spec
  test.skip("should clear text input field when an item is added", async ({
    page,
  }) => {
    // Arrange: Create a new todo locator
    // Act: Create a new todo item.
    // Assert: Make sure the input field is empty.
  });

  // TODO-04: Write Test Spec
  test.skip("should append new items to the bottom of the list", async ({
    page,
  }) => {
    // Arrange: Create 3 items.
    // Act: Create a todo count locator
    // Assert: Check test using different methods.
    // Assert: Check all items in one call.
  });

});


// TEST SUITE #2 - Completing All Behavior
test.describe('Mark all as completed', () => {

  test.beforeEach(async ({ page }) => {
  });

  test.afterEach(async ({ page }) => {
  });

  test.skip('should allow me to mark all items as completed', async ({ page }) => {
  });

  test.skip('should allow me to clear the complete state of all items', async ({ page }) => {
  });

  test.skip('complete all checkbox should update state when items are completed / cleared', async ({ page }) => {
  });
});

// TEST SUITE #3 - Item Behavior
test.describe('Item', () => {

  test.skip('should allow me to mark items as complete', async ({ page }) => {
  });

  test.skip('should allow me to un-mark items as complete', async ({ page }) => {
  });

  test.skip('should allow me to edit an item', async ({ page }) => {
  });
});

// TEST SUITE #4 - Editing Behavior
test.describe('Editing', () => {
  test.beforeEach(async ({ page }) => {
  });

  test.skip('should hide other controls when editing', async ({ page }) => {
  });

  test.skip('should save edits on blur', async ({ page }) => {
  });

  test.skip('should trim entered text', async ({ page }) => {;
  });

  test.skip('should remove the item if an empty text string was entered', async ({ page }) => {
  });

  test.skip('should cancel edits on escape', async ({ page }) => {
  });
});


// TEST SUITE #5 - Counter Behavior
test.describe('Counter', () => {
  test.skip('should display the current number of todo items', async ({ page }) => {
  });
});

// TEST SUITE #6 - Completed Button Behavior
test.describe('Clear completed button', () => {
  test.beforeEach(async ({ page }) => {
  });

  test.skip('should display the correct text', async ({ page }) => {
  });

  test.skip('should remove completed items when clicked', async ({ page }) => {
  });

  test.skip('should be hidden when there are no items that are completed', async ({ page }) => {
  });
});


// TEST SUITE #7 - Persistence Behavior
test.describe('Persistence', () => {
  test.skip('should persist its data', async ({ page }) => {
  });
});


// TEST SUITE #8 - Routing Behavior
test.describe('Routing', () => {
  test.beforeEach(async ({ page }) => {
  });

  test.skip('should allow me to display active items', async ({ page }) => {
  });

  test.skip('should respect the back button', async ({ page }) => {
  });

  test.skip('should allow me to display completed items', async ({ page }) => {
  });

  test.skip('should allow me to display all items', async ({ page }) => {
  });

  test.skip('should highlight the currently applied filter', async ({ page }) => {
  });
});

// ----- Async Helper Functions ------------------------------------------------

async function createDefaultTodos(page: Page) {
}

async function checkNumberOfTodosInLocalStorage(page: Page, expected: number) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).length === e;
  }, expected);
}

async function checkNumberOfCompletedTodosInLocalStorage(page: Page, expected: number) {
  return await page.waitForFunction(e => {
    return JSON.parse(localStorage['react-todos']).filter((todo: any) => todo.completed).length === e;
  }, expected);
}

async function checkTodosInLocalStorage(page: Page, title: string) {
  return await page.waitForFunction(t => {
    return JSON.parse(localStorage['react-todos']).map((todo: any) => todo.title).includes(t);
  }, title);
}
