import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import prettierPlugin from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist', 'node_modules'],
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
      '@typescript-eslint': tseslint,
      prettier: prettierPlugin,
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {}, // TypeScript 경로 별칭 지원
      },
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...prettierPlugin.configs.recommended.rules, // Prettier 관련 규칙 추가
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'import/order': [
        'warn',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'index',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
            },
          ],
          'newlines-between': 'always',
        },
      ],
      'import/no-extraneous-dependencies': [
        'error',
        { devDependencies: ['vite.config.ts', '**/*.test.ts', '**/*.spec.ts'] },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn'],
      'prettier/prettier': 'error',
    },
  },
];
