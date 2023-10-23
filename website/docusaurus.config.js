// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */

const config = {
  title: 'Playwright For Beginners 🎭',
  tagline: 'Core Concepts · Developer Tools · Guided Projects',
  url: 'https://Playwright-FYI.github.io',
  baseUrl: '/playwright-workshop-101/',

  organizationName: 'Playwright-FYI', 
  projectName: 'playwright-workshop-101', 
  deploymentBranch: 'gh-pages',
  favicon: 'img/favicon.ico',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({

      // TODO: Replace this
      image: 'img/docusaurus-social-card.jpg',

      navbar: {
        title: 'Workshops',
        logo: {
          alt: 'Playwright Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Concepts',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Tools',
          },
          {
            type: 'docSidebar',
            sidebarId: 'mainSidebar',
            position: 'left',
            label: 'Projects',
          },
          {
            href: 'https://github.com/Playwright-FYI/playwright-workshop-101',
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },

      footer: {
        style: 'dark',
        links: [
          {
            label: `🎭  Docs`,
            to: "https://aka.ms/playwright",
          },
          {
            label: `GitHub`,
            to: "https://aka.ms/playwright/github",
          },
          {
            label: `Discord`,
            to: "https://aka.ms/playwright/discord",
          },
          {
            label: 'YouTube',
            to: 'https://aka.ms/playwright/youtube',
          },
          {
            label: 'Dev.to',
            to: 'https://dev.to/playwright',
          },
          {
            label: 'Twitter',
            to: 'https://twitter.com/playwrightweb',
          },
          {
            label: "Privacy Statement ",
            to: "https://privacy.microsoft.com/privacystatement",
          },
          {
            label: `© ${new Date().getFullYear()} Microsoft`,
            to: "https://microsoft.com",
          },
        ],
        //copyright: `Copyright © ${new Date().getFullYear()} Microsoft · Built With Docusaurus`,
      },

      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
