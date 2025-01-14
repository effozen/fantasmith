import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 수학식 표기
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import PrismLight from './src/utils/prismLight';
import PrismDark from './src/utils/prismDark';

// 이 파일은 Node.js에서 실행됩니다 - 여기에서는 클라이언트 사이드 코드(브라우저 API, JSX 등)를 사용하지 마세요.

const config: Config = {
  // 사이트 제목 설정
  title: `Zen's Atelier`,
  staticDirectories: ['public', 'static'],
  // 사이트 태그라인 설정
  tagline: '생각의 동기화를 바탕으로 몰입을 이끌어내는 개발자',
  // 파비콘 설정
  favicon: 'img/favicon.ico',

  // 사이트의 프로덕션 URL을 설정하세요.
  url: 'https://fantasmith.com',
  // 사이트가 제공되는 /<baseUrl>/ 경로명을 설정하세요.
  baseUrl: '/',

  // GitHub 페이지 배포 구성.
  // GitHub 페이지를 사용하지 않는다면, 이 설정은 필요 없습니다.
  organizationName: 'effozen', // 일반적으로 GitHub 조직/사용자 이름입니다.
  projectName: 'FantaSmith', // 일반적으로 저장소 이름입니다.

  // 깨진 링크에 대한 동작 설정
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // 국제화를 사용하지 않더라도, 이 필드를 통해 유용한 메타데이터를 설정할 수 있습니다.
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko', 'en'],
  },

  // 프리셋 설정
  presets: [
    [
      'classic',
      {
        docs: false,
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // 리포지토리를 변경하세요.
        //   // "이 페이지를 편집하세요" 링크를 제거하려면 이 부분을 삭제하세요.
        //   editUrl: 'https://github.com/effozen/fantasmith/tree/main/',
        //   // 블로깅 모범 사례를 강제하기 위한 유용한 옵션
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        //   blogSidebarTitle: '📝 Posts',
        //   routeBasePath: 'blog',
        // },
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
  // 플러그인 설정 (라우트 등 동시에 설정)
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'blog', // 문서의 ID
        path: './docs/blog', // 문서가 위치한 디렉토리
        routeBasePath: 'blog', // 라우트의 기본 경로
        sidebarPath: require.resolve('./sidebars.ts'), // 사이드바 구성 파일
        editUrl: 'https://github.com/effozen/fantasmith/tree/main/', // 문서 편집 링크
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시
        sidebarCollapsible: true, // 사이드바 접기/펼치기
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'feedback_log', // 문서의 ID
        path: './docs/feedback_log', // 문서가 위치한 디렉토리
        routeBasePath: 'feedback_log', // 라우트의 기본 경로
        sidebarPath: require.resolve('./sidebars.ts'), // 사이드바 구성 파일
        editUrl: 'https://github.com/effozen/fantasmith/tree/main/', // 문서 편집 링크
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시
        sidebarCollapsible: true, // 사이드바 접기/펼치기
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'development', // 문서의 ID
        path: './docs/development', // 문서가 위치한 디렉토리
        routeBasePath: 'development', // 라우트의 기본 경로
        sidebarPath: require.resolve('./sidebars.ts'), // 사이드바 구성 파일
        editUrl: 'https://github.com/effozen/fantasmith/tree/main/', // 문서 편집 링크
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시
        sidebarCollapsible: true, // 사이드바 접기/펼치기
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'reactLab', // 문서의 ID
        path: './docs/reactLab', // 문서가 위치한 디렉토리
        routeBasePath: 'reactLab', // 라우트의 기본 경로
        sidebarPath: require.resolve('./sidebars.ts'), // 사이드바 구성 파일
        editUrl: 'https://github.com/effozen/fantasmith/tree/main/', // 문서 편집 링크
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시
        sidebarCollapsible: true, // 사이드바 접기/펼치기
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'frontEnd', // 문서의 ID
        path: './docs/frontEnd', // 문서가 위치한 디렉토리
        routeBasePath: 'frontEnd', // 라우트의 기본 경로
        sidebarPath: require.resolve('./sidebars.ts'), // 사이드바 구성 파일
        editUrl: 'https://github.com/effozen/fantasmith/tree/main/', // 문서 편집 링크
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시
        sidebarCollapsible: true, // 사이드바 접기/펼치기
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'challenge', // 문서의 ID
        path: './docs/challenge', // 문서가 위치한 디렉토리
        routeBasePath: 'challenge', // 라우트의 기본 경로
        sidebarPath: require.resolve('./sidebars.ts'), // 사이드바 구성 파일
        editUrl: 'https://github.com/effozen/fantasmith/tree/main/', // 문서 편집 링크
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시
        sidebarCollapsible: true, // 사이드바 접기/펼치기
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'skills', // 문서의 ID
        path: './docs/skills', // 문서가 위치한 디렉토리
        routeBasePath: 'skills', // 라우트의 기본 경로
        sidebarPath: require.resolve('./sidebars.ts'), // 사이드바 구성 파일
        editUrl: 'https://github.com/effozen/fantasmith/tree/main/', // 문서 편집 링크
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시
        sidebarCollapsible: true, // 사이드바 접기/펼치기
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
      },
    ],
    'docusaurus-plugin-image-zoom',
    '@docusaurus/theme-live-codeblock',
  ],

  // 테마 구성
  themeConfig: {
    // 사이트의 기본 Open Graph 및 Twitter 카드 이미지를 설정합니다.
    image: 'img/social-card.webp', // 원하는 이미지로 변경
    algolia: {
      // The application ID provided by Algolia
      appId: 'MHKBL5OI7D',

      // Public API key: it is safe to commit it
      apiKey: '62da566c05ccf76540fa1c50d0e3ea01',

      indexName: 'fantasmith',

      // Optional: see doc section below
      contextualSearch: true,

      // // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: "external\\.com|domain\\.com",

      // // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: "/docs/", // or as RegExp: /\/docs\//
      //   to: "/",
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },
    prism: {
      additionalLanguages: [
        'markup',
        'jsx',
        'tsx',
        'swift',
        'kotlin',
        'objectivec',
        'js-extras',
        'reason',
        'rust',
        'graphql',
        'yaml',
        'go',
        'cpp',
        'markdown',
        'python',
        'json',
        'java',
        'latex',
        'haskell',
        'matlab',
        'php',
        'powershell',
        'bash',
        'diff',
        'scss',
      ],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: { start: 'highlight-start', end: 'highlight-end' },
        },
        {
          className: 'code-block-error-line',
          line: 'error-next-line',
          block: { start: 'error-start', end: 'error-end' },
        },
      ],
      theme: PrismLight,
      darkTheme: PrismDark,
    },
    zoom: {
      selector: '.markdown :not(em) > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)',
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
        margin: 24,
        scrollOffset: 600,
      },
    },
    docs: {
      sidebar: {
        hideable: true, // 사용자가 숨기거나 펼칠 수 있도록 함
        autoCollapseCategories: true, // 모든 카테고리가 기본적으로 펼쳐지도록 설정
      },
    },
    navbar: {
      hideOnScroll: true,
      logo: {
        alt: '사이트 로고',
        src: 'img/logo_black.webp',
        srcDark: 'img/logo_white.webp',
        width: 32,
        height: 32,
      },
      items: [
        { to: '/about', label: 'About', position: 'left' },
        {
          to: '/blog',
          type: 'dropdown',
          label: 'Blog',
          position: 'left',
          items: [
            { to: '/blog', label: 'Blog' },
            { to: '/feedback_log', label: 'Habbit' },
          ],
        },
        {
          to: '/development',
          type: 'dropdown',
          label: 'Development',
          position: 'left',
          items: [
            { to: '/development', label: 'Development' },
            { to: '/reactLab', label: 'React-Lab' },
            { to: '/frontEnd', label: 'Front-End' },
            { to: '/challenge', label: 'Challenge' },
            { to: '/skills', label: 'Dev-Skills' },
          ],
        },
        { to: '/project', label: 'Project', position: 'left' },
        {
          href: 'https://github.com/effozen/fantasmith',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Zen. Built with Docusaurus.`,
    },
    // prism: {
    //   theme: prismThemes.github,
    //   darkTheme: prismThemes.dracula,
    // },
    liveCodeBlock: {
      /**
       * 라이브 플레이그라운드의 위치를 지정합니다. 에디터 위나 아래에 배치할 수 있습니다.
       * 가능한 값: "top" | "bottom"
       */
      playgroundPosition: 'bottom',
    },
    // SEO 및 링크 미리보기를 위한 메타데이터 설정
    metadata: [
      // { name: "author", content: "Zen" },
      // {
      //   name: "keywords",
      //   content: "프론트엔드 개발, 동기화, Zen, 블로그, 프로그래밍, 몰입",
      // },
      // { name: "twitter:card", content: "summary_large_image" },
      // // 전역 타이틀 및 설명을 설정하되, 개별 페이지에서 덮어쓸 수 있도록 합니다.
      // { name: "twitter:url", content: "https://fantasmith.com" },
      // { property: "og:type", content: "website" },
      // { property: "og:title", content: "Zen's Atelier" },
      // {
      //   property: "og:description",
      //   content: "생각의 동기화를 바탕으로 몰입을 이끌어내는 개발자",
      // },
      // {
      //   property: "og:image",
      //   content: "https://fantasmith.com/img/social-card.webp",
      // },
      // { property: "og:url", content: "https://fantasmith.com" },
    ],
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    'src/css/custom.css', // Tailwind CSS가 포함된 CSS 파일 경로
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  // 추가 테마 설정
  themes: ['@docusaurus/theme-mermaid'],
  // Markdown에서 Mermaid 코드 블록을 사용하려면,
  // 이 옵션으로 Remark 플러그인을 활성화해야 합니다.
  markdown: {
    mermaid: true,
  },

  // head 태그 설정
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
        description: '생각의 동기화를 통해 몰입을 이끌어내는 개발자',
      }),
    },
  ],
};

export default config;
