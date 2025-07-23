import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Apply to JS/JSX files
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      js: pluginJs,
      react: pluginReact,
      security: pluginSecurity,
    },
    extends: [
      "plugin:js/recommended",           // @eslint/js recommended config
      "plugin:react/recommended",        // react plugin recommended flat config
    ],
    rules: {
      // Spread recommended rules from js and react configs
      ...pluginJs.configs.recommended.rules,
      ...pluginReact.configs.flat.recommended.rules,

      // Add security plugin rule(s)
      "security/detect-eval-with-expression": "error",
    },
  },
]);
