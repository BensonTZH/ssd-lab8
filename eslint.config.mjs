import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: { globals: globals.browser },
    plugins: {
      js: pluginJs,
      react: pluginReact,
      security: pluginSecurity,
    },
    rules: {
      // recommended rules from js plugin
      ...pluginJs.configs.recommended.rules,
      // recommended rules from react plugin (flat config)
      ...pluginReact.configs.flat.recommended.rules,
      // recommended rules from security plugin (you need to explicitly add them)
      // Manually include security plugin rules here (see note below)
      "security/detect-eval-with-expression": "error",
      // add other security plugin rules as needed, e.g.
      // "security/detect-object-injection": "warn",
    },
  },
];
