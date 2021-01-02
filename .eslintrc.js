module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  "parser": "babel-eslint",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  rules: {
    indent: ['error', 4],
    'linebreak-style': 0,
    'no-alert': 0,
    'class-methods-use-this': 0,
    'max-len': ['error', { 'code': 130 }],
    'no-invalid-this': 0
  },
};
