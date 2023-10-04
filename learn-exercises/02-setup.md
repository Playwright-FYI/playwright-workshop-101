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

The repository comes with a [sample application](./app-todomvc/) that we'll be testing. Before we get started, let's make sure the application runs as expected.

```bash
# Change to the application directory
$ cd app-todomvc

# Use a recent Node.js version (I prefer LTS)
$ nvm use --lts
Now using node v18.18.0 (npm v9.8.1)

# Follow instructions to build and run app
$ npm install typescript
$ npm run build
$ npm run start

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

Let's start off by checking if the Playwright installation is correct:
```bash
$ npx playwright --version
Version 1.38.1
```

This tells us two things. First, that Playwright Test (library) and its dependencies (browsers) are pre-installed in this environment. Second, that we are in fact running the latest version of Playwright (at this time).

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
$ npx playwright test tests-examples/demo-todo-app.spec.ts
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

Let's change that. Modify the line to read `testDir: '.'`. We are now telling Playwright that top-level folder for test specifications is the root of the repo - so _all_ test specifications in the repo now become discoverable. _Save the change, then run the test again_.

```bash
$ npx playwright test tests-examples/demo-todo-app.spec.ts
Running 72 tests using 3 workers
  72 passed (44.5s)
```

🚀 | Congratulations!! We valdiate the Playwright Test Runner.

## Step 6: Validate Test With Sample App

Since the sample application is _exactly the same_ as the deployed application, we should be able to run the tests against the _local preview endpoint_ and have them pass. Right?

Let's try it out. To simplify this exercise at this stage, I simply made a copy of the original spec in `tests-examples/demo-todo-local.spec.ts` - then changed the target url to `http://localhost:4200` (the preview URL for our dev server).

Let's try this out. Note that I am assuming you still have your sample app running locally from Step 3. If not, first start that up as we did before, in one terminal. 

Once it is running, then run Playwright Test as follows - note that this time, for fun, we've added an option `--project chromium`. This tells the Playwright Test runner to run this only for the single browser (chromium) instead of all three (default option).

```bash
# Run the demo-todo-local test - default 1 browser
$npx playwright test demo-todo-local --project chromium
Running 24 tests using 3 workers
  24 passed (13.0s)
```

🚀 |  We've validated that the sample app passes the demo script!!


## 🛑 | Don't Forget To Reset `testDir`

In Step 5, we decided to change the `testDir` property to "." so we could find test specifications in the entire repo. Let's change that back to the default `./tests` value so we can reset our environment for starting the next exercise.

Your `playwright.config.ts` should now read:

```ts
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
```

🚀 | Let's move on and learn more about the Playwright Test Specification!

