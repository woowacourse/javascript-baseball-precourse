module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },

  rules: {
    'prettier/prettier': 'off',
    'no-console': 'off',
    'spaced-comment': 'off',
    'no-else-return': 'off',
    'import/prefer-default-export': 'off',
  },
};
