import js from "@eslint/js";

export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module"
    },
    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"]
    }
  }
];