import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 이 파일은 Node.js에서 실행됩니다 - 여기에서는 클라이언트 사이드 코드(브라우저 API, JSX 등)를 사용하지 마세요.

const config: Config = {
  title: `Zen's Atelier`,
  tagline: '동기화를 중요하게 생각하는 프론트앤드 개발자',
  favicon: 'img/favicon.ico',

  // 사이트의 프로덕션 URL을 설정하세요.
  url: 'https://fantasmith.com',
  // 사이트가 제공되는 /<baseUrl>/ 경로명을 설정하세요.
  // GitHub 페이지 배포의 경우, 일반적으로 '/<projectName>/'입니다.
  baseUrl: '/',

  // GitHub 페이지 배포 구성.
  // GitHub 페이지를 사용하지 않는다면, 이 설정은 필요 없습니다.
  organizationName: 'effozen', // 일반적으로 GitHub 조직/사용자 이름입니다.
  projectName: 'FantaSmith', // 일반적으로 저장소 이름입니다.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 국제화를 사용하지 않더라도, 이 필드를 통해 유용한 메타데이터를 설정할 수 있습니다.
  // 예를 들어, 사이트가 중국어라면 "en"을 "zh-Hans"로 변경할 수 있습니다.
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
          // 리포지토리를 변경하세요.
          // "이 페이지를 편집하세요" 링크를 제거하려면 이 부분을 삭제하세요.
          editUrl:
            'https://github.com/effozen/fantasmith/tree/main/',
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 리포지토리를 변경하세요.
          // "이 페이지를 편집하세요" 링크를 제거하려면 이 부분을 삭제하세요.
          editUrl:
            'https://github.com/effozen/fantasmith/tree/main/',
          // 블로깅 모범 사례를 강제하기 위한 유용한 옵션
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
          blogSidebarTitle: '📝 목차',
          routeBasePath: 'blog',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-TNMDGQWQYM',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // 프로젝트의 소셜 카드로 대체하세요.
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: `Zen's Atelier`,
      logo: {
        alt: '사이트 로고',
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
      copyright: `Copyright © ${new Date().getFullYear()} Zen's Atelier. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    liveCodeBlock: {
      /**
       * 라이브 플레이그라운드의 위치를 지정합니다. 에디터 위나 아래에 배치할 수 있습니다.
       * 가능한 값: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    metadata: [
      { name: 'keywords', content: '프론트엔드 개발, 동기화, Zen, 블로그, 프로그래밍' },
      { name: 'author', content: 'Zen' },
      { name: 'description', content: `Zen's Atelier - 동기화를 중요하게 생각하는 프론트앤드 개발자` },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: `Zen's Atelier` },
      { name: 'twitter:description', content: '동기화를 중요하게 생각하는 프론트앤드 개발자' },
      { name: 'twitter:url', content: 'https://fantasmith.com' },
      { name: 'twitter:image', content: 'https://fantasmith.com/img/logo.webp' },
      { property: 'og:title', content: `Zen's Atelier` },
      { property: 'og:description', content: '동기화를 중요하게 생각하는 프론트앤드 개발자' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://fantasmith.com' },
      { property: 'og:image', content: 'https://fantasmith.com/img/logo.webp' },
    ],
  } satisfies Preset.ThemeConfig,

  themes: ['@docusaurus/theme-mermaid'],
  // Markdown에서 Mermaid 코드 블록을 사용하려면,
  // 이 옵션으로 Remark 플러그인을 활성화해야 합니다.
  markdown: {
    mermaid: true,
  },
  plugins: ['@docusaurus/theme-live-codeblock'],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'sitemap',
        type: 'application/xml',
        title: 'Sitemap',
        href: 'https://fantasmith.com/sitemap.xml',
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Zen',
        url: 'https://fantasmith.com',
        sameAs: [
          'https://github.com/effozen',
          'https://www.linkedin.com/in/effozen/',
          'https://x.com/effozen',
        ],
        jobTitle: '프론트엔드 개발자',
        description: '동기화를 중요하게 생각하는 프론트앤드 개발자',
      }),
    },
  ],
};

export default config;
