# Playwright Workshop 101: Learn Labs

The [Playwright Workshop 101](https://github.com/Playwright-FYI/playwright-workshop-101) contains a series of hands-on exercises that cover [Playwright](https://playwright.dev) fundamentals for a beginner audience. This directory contains the source for a [Docusaurus-based website](https://docusaurus.io) that provides step-by-step guidance for self-guided completion of these exercises.

This README provides a quick primer on how this website was created, and how you can
 - build & preview _a development version_ of the site in a dev container or on your local device
 - build & deploy _a production version_ of the site to a hosting service (here, GitHub Pages)

## About Docusaurus

[Docusaurus](https://docusaurus.io/) is an open-source static site generation solution from Meta that is particularly optimized for _websites that focus on content_. It supports both Markdown content and MDX (which extends Markdown with support for React components). It is also the platform used by the Playwright team for the [Playwright Documentation](https://playwright.dev/).

## Project Setup (using v3)

As of Oct 2023, the _latest stable version_ of Docusaurus is `2.4.3` - but the _next version_ (`3.0.0-rc.0`) is available for early adopters. This marks the first **major version release** in a while, with _breaking changes_ expected for [migration from v2](
https://docusaurus.io/docs/next/migration/v3). 

Since our website is being create so close to that release date, we're going to start directly with the [`v`3.0.0-rc.0](https://docusaurus.io/docs/3.0.0-rc.0) version, using this command:

```bash
npx create-docusaurus@next website classic
```

This scaffolds the default `classic` theme in the `website/` folder.

## Project Customization

The main files modified in the initial customization stages are:
 - `docusaurus.config.js` - configure the presets and plugins
 - `sidebars.js` - configure the documentation sidebar groups
 - `src/css/custom.css` - configure global CSS style settings
 
For convenience, we will activate only the `docs` capability (documentation) and deactivate the `blog` feature, for now. Check the relevant files to understand the updates made.

## Dev Build & Preview

To build and preview the website in your local development environment (local device or dev container) run the following command. _Node.js v18+ is required - using the LTS version is recommended_.

```
cd website
npx docusaurus start
```

If the setup was successful, you should see the following output

```bash
[INFO] Starting the development server...
[SUCCESS] Docusaurus website is running at: http://localhost:3000/
```

If you are running within the GitHub Codespaces (dev container) environment this should automatically pop-up a dialog forwarding the port so you can view the page in a browser on the default host device.


## Production Build & Preview

It is always a good idea to build (and preview) the production-ready version of your site locally, before you push to deploy. This lets you detect any issues like _broken links_ early, rather than wait for them to be detected during the CI/CD workflow.

Use the following commands to build a production-ready version and preview it locally:

```bash
npx docusaurus build && npx docusaurus serve
```

If successful, you should see output from the two phases of execution along these lines:

```bash
[INFO] [en] Creating an optimized production build...
✔ Client
✔ Server
  Compiled successfully in 27.64s

[SUCCESS] Generated static files in "build".
[INFO] Use `npm run serve` command to test your build locally.
[SUCCESS] Serving "build" directory at: http://localhost:3000/
```

The production build is in the `build/` directory which is `.gitignore`-ed by default, so you won't commit it accidentally into your repo. The `serve` command automatically launches a browser to the location serving this static version. 

Note that the **development preview** has _live reload_ so you can observe changes as you modify the code, but the **production preview** has static files and will need to be rebuilt to see the effects of code changes.

## Deployment to GitHub Pages

The repository is configured for [deployment to GitHub Pages](https://docusaurus.io/docs/next/deployment#deploying-to-github-pages). This consists of three steps:

1. [Updating `docusaurus.config.js`](https://docusaurus.io/docs/next/deployment#docusaurusconfigjs-settings) to reflect GitHub settings.
2. [Adding `.github/workflow/deploy-gh.yml`](https://docusaurus.io/docs/next/deployment#triggering-deployment-with-github-actions) workflows for automation.
3. [Updating Pages settings](https://github.com/Playwright-FYI/playwright-workshop-101/settings/pages) in repo, to deploy from `gh-pages` branch.

Now, on subsequent commits where the `website/*` content is modified (by a pushed commit or a merged pull request), the GitHub action will run automatically, with 2 steps:
 1. It generates the static build and pushes it to the `gh-pages` branch
 2. A bot monitoring `gh-pages` branch updates the hosted endpoint.

At this point, the updated site should be visible on the hosted endpoint.