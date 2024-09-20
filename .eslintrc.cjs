module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "prettier",
    "standard",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:tailwindcss/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "object-curly-newline": "0",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "max-len": [2, 75],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
        maxEOF: 1,
      },
    ],
  },
};
