# Exercise: Understand Setup

In this unit, we'll validate our development environment and check that the sample application is running correctly. We'll also validate our Playwright setup by checking that we can run a basic test.

Let's get started.

## Step 1: Fork This Repo

Start by forking this repository to your personal profile on GitHub. The default fork will copy only the `main` branch. 

🚀 | Great! You are now ready to validate your developer environment.

## Step 2: Launch GitHub Codespaces

You will notice the the repository has a `.devcontainer/devcontainer.json` file. This shows that it can be run in a [development container](https://containers.dev) - a pre-configured environment (based on a Docker container image) that has all the necessary tools and libraries installed for you. You can run the container in the cloud (with GitHub Codespaces) or run it in your local device (with Docker Desktop). We'll use the first option.

> Click the `Code` tab on your fork of the repo, as shown below. 

![Launch in a codespace](./assets/02-setup-launch-codespace.png)

> Click `Create codespace on main`. 

You should see a new tab open with a message like the one shown below. This indicates the container is being built. Once ready, the tab transforms into a _Visual Studio Code Editor UI_ in the browser. 

![Build codespace](./assets/02-setup-build-codespace.png)

Congratulations - you are now running in a GitHub Codespace. There is a generous free quota that is sufficient for this purpose. Want to learn more about how this works, and how you can optimize your free usage? Check out these references:

- [GitHub Codespaces Overview](https://docs.github.com/en/codespaces/overview)
- [View Your GitHub Codespaces Usage](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/viewing-your-github-codespaces-usage)
- [Manage Spending Limits for GitHub Codespaces](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/managing-the-spending-limit-for-github-codespaces)

🚀 | You are now ready to validate the sample application.


## Step 3: Validate The Sample App

The repository comes with a [sample application](https://github.com/Playwright-FYI/playwright-workshop-101/tree/main/app-todomvc) that we'll be testing. Before we get started, let's make sure the application runs as expected. 

1. Change to the application directory
```bash
cd app-todomvc
```

2. Use a recent Node.js version (for example LTS). You can use the [Node Version Manager](https://github.com/nvm-sh/nvm) to easily switch versions.

```bash
nvm use --lts
```
You should now see the version of Node you are using:
```bash
Now using node v18.18.0 (npm v9.8.1)
```

1. Follow instructions to build and run app
```bash
npm run build
npm run start
```
After running the above commands you should now see a message in the terminal telling you that the app has started and is being served.
```bash
> start
> node ./serve.js

Serving on http://localhost:4200/
```

You should see a pop-up like this in your Visual Studio Code environment. This tells you that GitHub Codespaces is _automatically forwarding that port to your host device_ allowing the server on that port to be accessed from your device browser (outside the GitHub Codespaces dev container). See: [forwarding ports in your codespace](https://docs.github.com/en/codespaces/developing-in-codespaces/forwarding-ports-in-your-codespace) for more information.

![Forward Ports](./assets/02-setup-forward-ports.png)

You can now click "Open in Browser" to preview the application in your host device. You should see something like this:
![ToDoMVC Preview](./assets/02-setup-preview-app.png)

> Sidebar: About ToDoMVC

The sample application is an _adapted version_ of the [tastejs/todomvc](https://github.com/tastejs/todomvc) reference application set. More specifically, it is derived from the [TypeScript & React](https://todomvc.com/examples/typescript-react/#/) version of the application whose [source is available here](https://github.com/tastejs/todomvc/tree/gh-pages/examples/typescript-react).

The Playwright team maintains a [hosted version](https://demo.playwright.dev/todomvc) of this application that has been adapted to support the `demo-todo-app.spec.ts` sample specification that ships with every new Playwright project. We are using _that_ version of the ToDoMVC app so we can deconstruct this demo sample to learn key concepts.

🚀 | Congratulations!! You can now validate the Playwright setup.

## Step 4: Validate Playwright Setup

The repository has been setup to have a Playwright project scaffolded at the root of the repository, with the target sample application source in the `app-todomvc/` directory. The Playwright setup consists of _four_ key files or folders:
 1. `playwright.config.ts` - the Playwright Test Configuration file.
 2. `tests/` -   top-level folder that Playwright searches recursively, for tests
 3. `tests-examples/` - staging folder with demo test scripts to try out.
 4. `.github/workflows/playwright.yml` - GitHub Action for automating tests

Playwright releases a new version every month. Let's update to the latest version by running the following command:

```bash
npm install -D @playwright/test@latest
```

Once you update to the latest version of Playwright you will then need to install the latest browsers as these are not installed by default when installing Playwright.

```bash
npx playwright install
```

## Step 5: Validate Playwright Test Runner

As we mentioned earlier, Playwright ships with a default `demo-todo-app.spec.ts` that you will find under the `test-examples/` folder. If you open that file, you will notice this code - which tells us the test script is running against the Playwright team's hosted version of this sample app.
v
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

🚀 | Congratulations!! We validated the Playwright Test Runner.

## Step 6: Validate Test With Sample App

Since the sample application is _exactly the same_ as the deployed application, we should be able to run the tests against the _local preview endpoint_ and have them pass. Right?

Let's try it out. To simplify this exercise at this stage, I simply made a copy of the original spec in `tests-examples/demo-todo-local.spec.ts` - then changed the target url to `http://localhost:4200` (the preview URL for our dev server).

Let's try this out. Note that I am assuming you still have your sample app running locally from Step 3. If not, first start that up as we did before, in one terminal. 

Once it is running, then run Playwright Test as follows - note that this time, for fun, we've added an option `--project chromium`. This tells the Playwright Test runner to run this only for the single browser (chromium) instead of all three (default option).

Run the demo-todo-local test - default 1 browser:

```bash
npx playwright test demo-todo-local --project chromium
```
You should now see only 24 tests were run using 3 workers as tests are only run on one browser, therefore less tests are being run.

```bash
Running 24 tests using 3 workers
  24 passed (13.0s)
```

🚀 |  We've validated that the tests from the demo todo app pass!!


## 🛑 | Don't Forget To Reset `testDir`

In Step 5, we decided to change the `testDir` property to "." so we could find test specifications in the entire repo. Let's change that back to the default `./tests` value so we can reset our environment for starting the next exercise.

Your `playwright.config.ts` should now read:

```ts
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  ..
})
```

🚀 | Let's move on and learn more about the Playwright Test Specification!

