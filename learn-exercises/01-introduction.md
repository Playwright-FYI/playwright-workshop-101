# Introduction

## Overview

In this lab, you'll learn how to use Playwright to test a sample web application. You'll learn how to run tests, view test reports, and understand the structure of a Playwright project. You'll also learn how to use Visual Studio Code to run tests, debug tests, and record new tests. Finally, you'll learn how to create a new test suite, and how to refine your tests. But before we get started, let's talk about Test Automation and Playwright.
 - What is Test Automation?
 - What is Playwright?
 - Why should we use Playwright?
 - What are some core Playwright concepts?
 - What are some core Playwright tools?

## What is Test Automation?

Thanks to CI/CD pipelines, modern web apps are deployed more frequently, often being _pushed to production_ multiple times on a daily basis. Web apps are also becoming more complex - with more dynamic content, more elements per page, and more complex user interactions. Web apps are also being accessed by more users, on a wider range of devices, and over more diverse networks.

Delivering a reliable and consistent user experience in this environment is challenging. _Testing_ becomes critical to ensure that the app is working as expected, and that new changes don't break existing functionality. Traditional Quality Assurance approaches that relied on _manual testers_ won't scale to the demands of these modern apps. We need _automated testing_ approaches that can perform _repetitive, time-consuming tests_ reliably and consistently.

Test Automation is the process of using _software tools and processes_ to execute testing strategies with minimal manual involvement and automated repetable workflows. Test Automation _frameworks_ provide tools, libraries and rules for developers to execute automated testing plans. [Popular options](https://saucelabs.com/resources/blog/top-test-automation-frameworks-in-2023) include Selenium, Cypress, and [Playwright](https://playwright.dev). 

In this workshop, we'll get an introduction to Playwright, learn core concepts, and understand how to use its core tools and workflows to implement an automated end-to-end testing strategy.

## What is Playwright?

[Playwright](https://playwright.dev/) is an open-source framework for _reliable_ end-to-end testing for modern web apps. It is relatively new (released in 2019) but maintains an active [release schedule](https://playwright.dev/docs/release-notes#version-138), adding new features and fixing bugs at a rapid pace. The [2022 StateOfJS](https://2022.stateofjs.com/en-US/libraries/testing/) trends on testing show that Playwright is growing steadily in popularity and retention within the web development community.

![Playwright](./assets//playwright-ranking.png)


## Why should we use Playwright?

There are [many reasons for choosing Playwright](https://playwright.dev/docs/why-playwright) as your test automation framework. Here are four key ones:
 1. _Unified API_. Playwright works across all modern browser engines (Chromium, WebKit, Firefox) and supports device emulation for mobile coverage. It has headed and headless browser options, allowing developers to prioritize between debugging convenience and CI/Cloud execution.
 2. _Resilient Testing_. Playwright implements "auto-wait" (no artificial timeouts) and "auto-retry" (web assertions) - eliminating key causes for flaky tests. Rich tooling options (tracing, time-travel) make it easy to debug and fix issues if failures occur.
 3. _Test Isolation_. Every test runs in its own _BrowserContext_, independent of other tests running at the same time. Tests are run in parallel (for optimization) and one test failure will not impact others (for reliability).
 4. _Powerful Tooling_. Playwright streamlines the developer experience from test authoring, to execution, debugging, reporting, and profiling - with options to use a CLI or the Visual Studio Code extension.

![Playwright](./assets/playwright-overview.png)

## Playwright Core Concepts

In the following exercises, we'll learn how to perform a number of test automation tasks using Playwright. To set the stage, here are a few core terms and concepts to keep in mind. Their purpose and usage will become clearer when you work through the exercises.

| Concept | Description |
|:---|:---|
| [TestConfig](https://playwright.dev/docs/api/class-testconfig)| Configure Playwright Test Runner using File (static) or API (dynamic)|
| [TestProject](https://playwright.dev/docs/test-projects)| Logical group of tests running same TestConfig. Can be defined by filter.|
| [Test Timeout](https://playwright.dev/docs/test-timeouts)| Global (per test run), Default (per test), Expect Timeouts, Fixture Timeouts |
| [Fixtures](https://playwright.dev/docs/test-fixtures)| Core to Playwright _test isolation_. Set environment - see [built-in](https://playwright.dev/docs/test-fixtures#built-in-fixtures) options. |
| [Navigation](https://playwright.dev/docs/writing-tests#actions)| Using `page.goto()` [options](https://playwright.dev/docs/api/class-page#page-goto) to craft multi-page testing workflows |
| [Locators](https://playwright.dev/docs/locators)| Core to Playwright auto-wait and auto-retry. Action _finds_ target elements.|
| [Assertions](https://playwright.dev/docs/test-assertions)| Core to Playwright _validation_ of expected outcomes based on actions.|
| [Annotations](https://playwright.dev/docs/test-annotations)| Tag tests to provide added context to deal with failures, focus, flakiness.|
| [`use` Options](https://playwright.dev/docs/test-use-options)| Configure Browser (project) or BrowserContext (context) within _scope_. |
| [Page Object Models](https://playwright.dev/docs/pom)| Represent UI components by "Objects", associate testing logic for reuse |
| | |


## Playwright Core Tools

We'll also be learning to use a number of Playwright tools - both from the command-line and from within Visual Studio Code. For reference, here are some key developer tools we'll explore - with a description of the role they play in a testing workflow.

| Tool | Description |
|:---|:---|
| [Playwright Test](https://playwright.dev/docs/test-cli) | The Playwright Test Runner and default CLI|
| [Playwright Extension](https://playwright.dev/docs/getting-started-vscode) | The Playwright Extension for Visual Studio Code|
| [Codegen](https://playwright.dev/docs/codegen-intro)| Playwright Test Generator (for automated authoring) |
| [UI Mode](https://playwright.dev/docs/test-ui-mode)| Playwright Time Travel Experience (with Watch Mode) |
| [Trace Viewer](https://playwright.dev/docs/trace-viewer-intro)| Graphical UI for exploring recorded Playwright traces. |
| [VS Code Debugger](https://playwright.dev/docs/debug#vs-code-debugger)| Powerful debugging support using VS Code Extension.|
|[Playwright Inspector](https://playwright.dev/docs/debug#playwright-inspector)| Powerful debugging support from Playwright Commandline. |
|[Built-in Reporters](https://playwright.dev/docs/test-reporters#built-in-reporters) | Flexible reporting options, with support for customization. |
| [Continuous Integration](https://playwright.dev/docs/ci) | Support for wide range of CI providers (with sample config). |
| | |

In many cases, the same functionality will be available from both the CLI and the VS Code Extension. We'll explore the Playwright Test (CLI) option briefly, but recommend making Visual Studio Code Extension your preferred option given richer capabilities and a more streamlined developer experience.


## Next Steps

Now that we have a broad overview of Playwright, let's dive into our first exercise for more hands-on experience.
