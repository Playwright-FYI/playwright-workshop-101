# Playwright Fundamentals (Workshop 101)

In this Learn lab, you'll learn how to use the Playwright open-source test automation framework for building an end-to-end test specification for a sample application. 
 - We'll be using a _modified version_ of the [TasteJS TODO MVC application](https://github.com/tastejs/todomvc)
 - Our version reflects [this Playwright demo](https://demo.playwright.dev/todomvc) that's used as an example.


## The Scenario

Imagine that you are a developer working on an enterprise team that builds and maintains complex multi-scenario applications with thousands of users. Your team needs to make sure that your web application:
 - implements the functional specification _correctly_.
 - delivers _consistent_ user experiences across browser and device platforms
 - is _accessible_ to users with disabilities 
 - operates _reliably_ under varying load and network conditions
 - and that all these behaviors are validated with every _push to production_.

You have been tasked with identifying the right tools & establishing a testing plan that helps the team meet these goals. In this workshop, you'll get hands-on experience with using [Playwright](https://playwright.dev), an open-source test automation framework for reliable end-to-end testing of modern web apps. 


## Learning Objectives

By the end of this lab, you should be able to:
 - Describe what Playwright is, and why you should use it for end-to-end testing.
 - Describe the Playwright tools, and how they streamline developer experience.
 - Instrument your modern web application project to use Playwright
 - Author, Debug, Run, and Report end-to-end tests for your application.
 - Understand core Playwright features and best practices for effective testing.

## Pre-Requisites
 - Familiarity with Node.js and related ecosystem of tools and libraries.
 - Familiarity with GitHub - and a valid GitHub account.
 - Familarity with Visual Studio Code - and using VS Code Extensions.
 - General understanding of testing concepts and terminology.

## About This Project 

This workshop repository is configured to use a [dev container](https://containers.dev) that sets up a development environment in a custom Docker container that can be run in the cloud (with GitHub Codespaces) or on your local device (with Docker Desktop).

The default container is provisioned with:
 - A Node.js runtime with supporting tools & libraries
 - The Playwright test runner and browser dependencies
 - The Visual Studio Code editor with Playwright extension

The default repository is populated with:
 - A [sample application](./app-todomvc/) that we'll be testing (with source).
 - A [Playwright project](./playwright.config.js) to start from, in building our test suite.
 - A [set of exercises](./learn-exercises/) that we'll worth through, step-by-step, for this purpose.

Ready to get started? Head to the [first Learn Exercise](./learn-exercises/01-introducton.md) to get going.
