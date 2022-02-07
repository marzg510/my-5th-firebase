module.exports = {
  // root: true,
  env: {
    browser: true,
    es2021: true,
    // node: true
  },
  parserOptions: {
    'ecmaVersion': 12,
    'sourceType': 'module',
    // parser: '@babel/eslint-parser',
    // requireConfigFile: false
  },
  extends: [
    // '@nuxtjs',
    // 'plugin:nuxt/recommended'
    'plugin:vue/essential'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {}
}
