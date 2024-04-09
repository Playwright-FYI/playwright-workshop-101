# Exercise: Understand Setup

In this unit, we'll validate our development environment and check that the sample application is running correctly. We'll also validate our Playwright setup by checking that we can run a basic test.

Let's get started.

## Step 1: Fork This Repo

Start by forking this repository to your personal profile on GitHub. The default fork will copy only the `main` branch. 

🚀 | Great! You are now ready to validate your developer environment.


## Step 2: Validate The Sample App

The repository comes with a [sample application](https://github.com/Playwright-FYI/playwright-workshop-101/tree/main/app-todomvc) that we'll be testing. Before we get started, let's make sure the application runs as expected. 

1. Change to the application directory
```bash
cd app-todomvc
```

2. Install the dependencies needed to run the application locally.
```bash
npm install
```

3. Build the application.
```bash
npm run build
```

4. Install the dependencies needed to run the application locally.
```bash
npm run start
```

After running the above commands you should now see a message in the terminal telling you that the app has started and is being served.
```bash
> start
> node ./serve.js

Serving on http://localhost:4200/
```

You can now go to `http://localhost:4200/` to preview the application in your browser. You should see something like this:
![ToDoMVC Preview](./assets/02-setup-preview-app.png)

> About ToDoMVC

The sample application is an _adapted version_ of the [tastejs/todomvc](https://github.com/tastejs/todomvc) reference application set. More specifically, it is derived from the [TypeScript & React](https://todomvc.com/examples/typescript-react/#/) version of the application whose [source is available here](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react).

The Playwright team maintains a [hosted version](https://demo.playwright.dev/todomvc) of this application that has been adapted to support the `demo-todo-app.spec.ts` sample specification that ships with every new Playwright project. We are using _that_ version of the ToDoMVC app so we can deconstruct this demo sample to learn key concepts.

🚀 | Congratulations!! You can now install Playwright and start testing.

## Step 3: Validate Playwright Setup

Let's start by installing Playwright so we can test our TodoMVC application. Inside the `app-todomvc` directory, run the following command:

```bash
npm init playwright@latest
```
When you run this command you will be asked a few questions to configure the Playwright project:
  - Select the language you want to use for your tests. We recommend TypeScript
  - Select the name of the test directory. We recommend `tests`
  - Add a GitHub Action for automating tests. We recommend `Yes`
  - Install Playwright browsers. We recommend selecting the default of `true`.

Once installed, the Playwright setup consists of _four_ key files or folders:
 1. `playwright.config.ts` - the Playwright Test Configuration file.
 2. `tests/` -   top-level folder that Playwright searches recursively, for tests
 3. `tests-examples/` - staging folder with demo test scripts to try out.
 4. `.github/workflows/playwright.yml` - GitHub Action for automating tests

## Step 4: Validate Playwright Test Runner

As we mentioned earlier, Playwright ships with a default `demo-todo-app.spec.ts` that you will find under the `test-examples/` folder. If you open that file, you will notice this code - which tells us the test script is running against the Playwright team's hosted version of this sample app.

```js
test.beforeEach(async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc');
});
```

Let's go ahead and run the Playwright test. 

```bash
npx playwright test tests-examples/demo-todo-app.spec.ts
```
You will get the following error message:

```bash
Error: No tests found
```

> 🟥 What just happened? Why were we unable to find the tests?

We just learned a key _Playwright Configuration_ property: `testDir`. If you open the `playwright.config.ts` file, you will see this:

```js
export default defineConfig({
  testDir: './tests',
  ..
})
```

This property tells the Playwright Test runner to look _only within the subfolders of that root directory_ to locate relevant test specifications. Since our `demo-todo-app.spec.ts` was in a sibling `test-examples/` folder, it was not seen.

Let's change that. Modify the line to read `testDir: '.'`. 

```js
export default defineConfig({
  testDir: '.',
  ..
})
```

We are now telling Playwright that the top-level folder for test specifications is the root of the repo - so _all_ test specifications in the repo now become discoverable. _Save the change, then run the test again_.

```bash
npx playwright test tests-examples/demo-todo-app.spec.ts
```
Once the tests have finished running you should see that 72 tests were run using 3 workers, as well as how many tests passed and how long it took to run.

```bash
Running 72 tests using 3 workers
  72 passed (44.5s)
```

Let's change the config back to the default value of `./tests` so we can move on to the next exercise.

```js
export default defineConfig({
  testDir: './tests',
  ..
})
```

🚀 | Congratulations!! We validated the Playwright Test Runner.

## Step 5: Validate Test With Sample App

Since the sample application is _exactly the same_ as the deployed application, we should be able to run the tests against the _local preview endpoint_ and have them pass. Right?

Let's change the target url on line 4 to `http://localhost:4200` (the preview URL for our dev server).

```js
test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4200');
});
```

Let's try this out. Note that I am assuming you still have your sample app running locally from Step 2. If not, first start that up as we did before, in a separate terminal. 

Once the app is running, in another terminal run Playwright Test as follows: 

```bash
npx playwright test todo-app --project chromium
```

| note that this time, for fun, we've added an option `--project chromium`. This tells the Playwright Test runner to run this only for the single browser (chromium) instead of all three (default option).


You should now see only 24 tests were run using 3 workers as tests are only run on one browser, therefore less tests are being run.

```bash
Running 24 tests using 3 workers
  24 passed (13.0s)
```

🚀 |  We've validated that the tests from the local running todo app pass!!


## 🛑 | Don't Forget To Reset `testDir`

In Step 5, we decided to change the `testDir` property to "." so we could find test specifications in the entire repo. Let's change that back to the default `./tests` value so we can reset our environment for starting the next exercise.

Your `playwright.config.ts` should now read:

```ts
export default defineConfig({
  testDir: './tests',
  ..
})
```

🚀 | Let's move on and learn more about the Playwright Test Specification!
