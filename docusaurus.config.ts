import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// 이 파일은 Node.js에서 실행됩니다 - 여기에서는 클라이언트 사이드 코드(브라우저 API, JSX 등)를 사용하지 마세요.

const config: Config = {
  // 사이트 제목 설정
  title: `Zen's Atelier`,
  staticDirectories: ['public', 'static'],
  // 사이트 태그라인 설정
  tagline: '동기화를 중요하게 생각하는 프론트앤드 개발자',
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
        docs: {
          path: './docs/boostcamp', // 문서가 위치한 디렉토리
          routeBasePath: 'boostcamp',
          sidebarPath: './sidebars.ts',
          // 리포지토리를 변경하세요.
          // "이 페이지를 편집하세요" 링크를 제거하려면 이 부분을 삭제하세요.
          editUrl: 'https://github.com/effozen/fantasmith/tree/main/',
          showLastUpdateTime: true,
          sidebarCollapsible: false,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // 리포지토리를 변경하세요.
          // "이 페이지를 편집하세요" 링크를 제거하려면 이 부분을 삭제하세요.
          editUrl: 'https://github.com/effozen/fantasmith/tree/main/',
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
  // 플러그인 설정
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'fe_lab', // 문서의 ID
        path: './docs/fe_lab', // 문서가 위치한 디렉토리
        routeBasePath: 'fe_lab', // 라우트의 기본 경로
        sidebarPath: require.resolve('./sidebars.ts'), // 사이드바 구성 파일
        editUrl: 'https://github.com/effozen/fantasmith/tree/main/', // 문서 편집 링크
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시
        sidebarCollapsible: true, // 사이드바 접기/펼치기
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'react_lab', // 문서의 ID
        path: './docs/react_lab', // 문서가 위치한 디렉토리
        routeBasePath: 'react_lab', // 라우트의 기본 경로
        sidebarPath: require.resolve('./sidebars.ts'), // 사이드바 구성 파일
        editUrl: 'https://github.com/effozen/fantasmith/tree/main/', // 문서 편집 링크
        showLastUpdateTime: true, // 마지막 업데이트 시간 표시
        sidebarCollapsible: true, // 사이드바 접기/펼치기
      },
    ],
    '@docusaurus/theme-live-codeblock',
  ],

  // 테마 구성
  themeConfig: {
    // 사이트의 기본 Open Graph 및 Twitter 카드 이미지를 설정합니다.
    image: 'img/social-card.jpg', // 원하는 이미지로 변경
    docs: {
      sidebar: {
        hideable: true, // 사용자가 숨기거나 펼칠 수 있도록 함
        autoCollapseCategories: false, // 모든 카테고리가 기본적으로 펼쳐지도록 설정
      },
    },
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
        {
          type: 'doc',
          sidebarId: 'generalSidebar',
          position: 'left',
          label: '🔬 FE-Lab ',
          docsPluginId: 'fe_lab',
          docId: 'intro',
        },
        {
          type: 'doc',
          sidebarId: 'generalSidebar',
          position: 'left',
          label: ' 🧪 React-Lab ',
          docsPluginId: 'react_lab',
          docId: 'intro',
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
              to: '/boostcamp/intro',
            },
            {
              label: '🔬 FE-Lab',
              to: '/fe_lab/intro',
            },
            {
              label: '🧪 React-Lab',
              to: '/react_lab/intro',
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
    // SEO 및 링크 미리보기를 위한 메타데이터 설정
    metadata: [
      {name: 'author', content: 'Zen'},
      { name: 'keywords', content: '프론트엔드 개발, 동기화, Zen, 블로그, 프로그래밍' },
      {name: 'twitter:card', content: 'summary_large_image'},
      // 전역 타이틀 및 설명을 설정하되, 개별 페이지에서 덮어쓸 수 있도록 합니다.
      {name: 'twitter:url', content: 'https://fantasmith.com'},
      {property: 'og:type', content: 'website'},
      {property: 'og:url', content: 'https://fantasmith.com'},
    ],

  } satisfies Preset.ThemeConfig,
  stylesheets: [
    'src/css/custom.css', // Tailwind CSS가 포함된 CSS 파일 경로
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
        description: '동기화를 중요하게 생각하는 프론트앤드 개발자',
      }),
    },
  ],
};

export default config;
