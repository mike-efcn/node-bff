const path = require('path');

module.exports = {
  root: true,
  extends: [
    'airbnb-typescript/base',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'prettier',
  ],
  ignorePatterns: ['/*.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: [path.resolve(__dirname, 'tsconfig.json')],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', ['parent', 'sibling'], 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'sort-imports': [
      'error',
      {
        ignoreDeclarationSort: true,
      },
    ],
    'unicorn/filename-case': [
      'error',
      {
        cases: {
          camelCase: true,
          pascalCase: true,
        },
      },
    ],
    'unicorn/no-useless-undefined': [
      'error',
      {
        checkArguments: false,
      },
    ],
  },
  settings: {
    'import/extensions': ['.ts'],
  },
  overrides: [
    {
      files: ['test/**/*.spec.ts'],
      extends: ['plugin:jest/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'jest/no-disabled-tests': 'off',
      },
    },
  ],
};
