module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ["airbnb-base"],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    "class-methods-use-this": "off",
  },
};
