module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
    'linebreak-style': 0,
    'max-depth': ['error', 2],
    'max-lines-per-function': ['error', 15],
  },
};
