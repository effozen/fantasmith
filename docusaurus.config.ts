import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: `Zen's Atelier`,
  tagline: '동기화를 중요하게 생각하는 프론트앤드 개발자',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://fantasmith.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'effozen', // Usually your GitHub org/user name.
  projectName: 'FantaSmith', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/effozen/fantasmith/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: '📝 목차',
          routeBasePath: 'blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: `Zen's Atelier`,
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.webp',
      },
      items: [
        {to: '/blog', label: '🚀 성장 이야기', position: 'left'},
        {
          href: 'https://github.com/effozen',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'boostcampSidebar',
          position: 'left',
          label: '🧑‍💻 네부캠 프로젝트',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: '🧑‍💻 네부캠 프로젝트',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'linkedin',
              href: 'https://www.linkedin.com/in/effozen/',
            },
            {
              label: 'X',
              href: 'https://x.com/effozen',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: '🚀 성장이야기',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/effozen',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    liveCodeBlock: {
      /**
       * The position of the live playground, above or under the editor
       * Possible values: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
  } satisfies Preset.ThemeConfig,

  themes: ['@docusaurus/theme-mermaid'],
  // In order for Mermaid code blocks in Markdown to work,
  // you also need to enable the Remark plugin with this option
  markdown: {
    mermaid: true,
  },
  plugins: ['@docusaurus/theme-live-codeblock'],
};

export default config;
