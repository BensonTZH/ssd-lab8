import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";
import { defineConfig } from "eslint/config";

export default defineConfig({
  overrides: [
    {
      files: ["**/*.{js,mjs,cjs,jsx}"],
      languageOptions: {
        globals: globals.browser,
      },
      plugins: {
        js,
        react: pluginReact,
        security: pluginSecurity,
      },
      extends: [
        "plugin:js/recommended",
        "plugin:react/recommended",
      ],
      rules: {
        // Merge recommended rules from plugins explicitly (optional)
        ...js.configs.recommended.rules,
        ...pluginReact.configs.flat.recommended.rules,

        // Enable security rule(s)
        "security/detect-eval-with-expression": "error",
      },
    },
  ],
});
