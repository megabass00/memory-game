module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/strict",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2021,
    sourceType: "module",
  },
  plugins: ["react", "jsx-a11y"],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "no-var": "error",
    "brace-style": "error",
    "prefer-template": "error",
    radix: "error",
    "space-before-blocks": "error",
    "import/prefer-default-export": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
  },
  overrides: [
    {
      files: ["**/*.test.js", "**/*.test.jsx", "**/*.spec.js", "**/*.spec.jsx"],
      env: {
        jest: true,
      },
    },
  ],
};
