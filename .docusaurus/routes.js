import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '74f'),
    exact: true
  },
  {
    path: '/blog/2024-boostcamp-challenge',
    component: ComponentCreator('/blog/2024-boostcamp-challenge', '486'),
    exact: true
  },
  {
    path: '/blog/2024-puddingcamp-conference',
    component: ComponentCreator('/blog/2024-puddingcamp-conference', '3f5'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/boostcamp',
    component: ComponentCreator('/blog/tags/boostcamp', 'dcc'),
    exact: true
  },
  {
    path: '/blog/tags/conference',
    component: ComponentCreator('/blog/tags/conference', 'c34'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '40b'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '741'),
        routes: [
          {
            path: '/docs/tags',
            component: ComponentCreator('/docs/tags', 'fce'),
            exact: true
          },
          {
            path: '/docs/tags/test',
            component: ComponentCreator('/docs/tags/test', 'e13'),
            exact: true
          },
          {
            path: '/docs',
            component: ComponentCreator('/docs', '45c'),
            routes: [
              {
                path: '/docs/category/️-docstest-️',
                component: ComponentCreator('/docs/category/️-docstest-️', 'ea5'),
                exact: true,
                sidebar: "boostcampSidebar"
              },
              {
                path: '/docs/category/️-hard-skill-️',
                component: ComponentCreator('/docs/category/️-hard-skill-️', '23d'),
                exact: true,
                sidebar: "boostcampSidebar"
              },
              {
                path: '/docs/category/-soft-skill-',
                component: ComponentCreator('/docs/category/-soft-skill-', '0d3'),
                exact: true,
                sidebar: "boostcampSidebar"
              },
              {
                path: '/docs/docsTest/프로젝트 요약 130b1b2b6491806985bdd4e4ddcd2baa',
                component: ComponentCreator('/docs/docsTest/프로젝트 요약 130b1b2b6491806985bdd4e4ddcd2baa', '4cc'),
                exact: true,
                sidebar: "boostcampSidebar"
              },
              {
                path: '/docs/hardskill/intro',
                component: ComponentCreator('/docs/hardskill/intro', '53c'),
                exact: true,
                sidebar: "boostcampSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '029'),
                exact: true,
                sidebar: "boostcampSidebar"
              },
              {
                path: '/docs/softskill/intro',
                component: ComponentCreator('/docs/softskill/intro', '1c7'),
                exact: true,
                sidebar: "boostcampSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
