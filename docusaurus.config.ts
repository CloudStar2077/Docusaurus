import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import * as dotenv from 'dotenv';

dotenv.config();

const remarkGithubAlerts = require('remark-github-alerts');

const config: Config = {
  title: 'My Site',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  customFields: {
    githubUsername: process.env.DOCUSAURUS_GITHUB_USERNAME,
    contactEmail: process.env.DOCUSAURUS_CONTACT_EMAIL,
    linkedinUrl: process.env.DOCUSAURUS_LINKEDIN_URL,
    githubUrl: process.env.DOCUSAURUS_GITHUB_URL,
    siteTitle: process.env.DOCUSAURUS_SITE_TITLE,
    siteTagline: process.env.DOCUSAURUS_SITE_TAGLINE,
  },

  future: {
    v4: true,
  },

  url:
    process.env.DOCUSAURUS_URL ||
    'https://cloudstar2077.github.io',

  baseUrl:
    process.env.DOCUSAURUS_BASE_URL ||
    '/Docusaurus/',

  organizationName:
    process.env.DOCUSAURUS_GITHUB_USERNAME ||
    'CloudStar2077',

  projectName: 'Docusaurus',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          breadcrumbs: false,
          remarkPlugins: [remarkGithubAlerts],
        },

        // Blog vollständig deaktiviert
        blog: false,

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',

    colorMode: {
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: '',

      logo: {
        alt: 'Home',
        src: 'img/docusaurus.png',
        href: '/Docusaurus/',
      },

      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Projects',
        },
        {
          href:
            process.env.DOCUSAURUS_GITHUB_URL ||
            'https://github.com/CloudStar2077',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;