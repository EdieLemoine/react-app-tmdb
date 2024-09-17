module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
  },
  extends: ['next/core-web-vitals', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended'],
  plugins: ['import'],
  rules: {
    '@typescript-eslint/consistent-type-exports': [
      'warn',
      {
        fixMixedExportsWithInlineTypeSpecifier: true,
      },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: 'export',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: 'export',
        next: 'export',
      },
      {
        blankLine: 'always',
        prev: 'import',
        next: '*',
      },
      {
        blankLine: 'never',
        prev: 'import',
        next: 'import',
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'block',
      },
      {
        blankLine: 'always',
        prev: 'block',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: 'if',
      },
      {
        blankLine: 'always',
        prev: 'if',
        next: '*',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['interface', 'type'],
      },
      {
        blankLine: 'always',
        prev: ['interface', 'type'],
        next: '*',
      },
    ],
    'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
    'import/default': 'error',
    'import/first': 'warn',
    'import/newline-after-import': 'warn',
    'import/no-self-import': 'error',
    'import/no-useless-path-segments': 'warn',
    'import/order': [
      'warn',
      {
        'groups': ['index', 'type', 'builtin', 'external', ['sibling', 'parent', 'internal'], 'object'],
        'newlines-between': 'never',
        'alphabetize': {
          order: 'desc',
          caseInsensitive: false,
        },
      },
    ],
    'prettier/prettier': 'warn',
    'sort-imports': 'off',
  },
};
