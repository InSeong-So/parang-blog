module.exports = {
  root: true,
  env: {
    browser: true,
  },
  extends: [
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: ['tsconfig.json'],
  },
  // common rules
  rules: {
    indent: 'off',
    'brace-style': 'off',
    'arrow-parens': 'off',
    'no-console': 'off',
    'max-len': 'off',
    'sort-imports': 'off',
    'no-restricted-exports': 'off',
    'object-curly-newline': 'off',
    'max-params': ['error', 3],
    'jsx-quotes': 'off',
    'no-confusing-arrow': 'off',
    'no-nested-ternary': 'off',
    'comma-spacing': 'off',
    'function-paren-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'operator-linebreak': 'off',
    'no-underscore-dangle': 'off',
    'no-useless-constructor': 'off',
    'no-use-before-define': 'off',
    'no-param-reassign': 'off',
    'no-return-await': 'off',
    'prefer-regex-literals': 'off',
    'lines-between-class-members': 'off',
    // typescript
    '@typescript-eslint/restrict-template-expressions': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/ban-types': 'off',
    '@typescript-eslint/no-unsafe-call': 'off',
    '@typescript-eslint/no-unsafe-member-access': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-argument': 'off',
    '@typescript-eslint/no-unsafe-return': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    // next
    '@next/next/no-html-link-for-pages': 'off',
    '@next/next/no-server-import-in-page': 'off',
    // react
    'react/react-in-jsx-scope': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': 0,
    'react/function-component-definition': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-indent': 'off',
    'react/no-danger': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'prettier/prettier': [
      'error', {
        'singleQuote': true,
        'semi': true,
        'useTabs': false,
        'tabWidth': 2,
        'trailingComma': 'all',
        'printWidth': 100,
        'bracketSpacing': true,
        'arrowParens': 'always',
        'endOfLine': 'auto'
      }
    ]
  },
};
