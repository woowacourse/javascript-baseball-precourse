module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true, // 'module' is not defined. 에러가 발생하면 기입
  },
  extends: ['eslint:recommended', 'airbnb', 'plugin:cypress/recommended', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'import/prefer-default-export': 'off',
    'import/extensions': ['off'],
    'class-methods-use-this': 'off',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 100,
        bracketSpacing: true,
        arrowParens: 'avoid',
        endOfLine: 'auto',
      },
    ],
  },
};
