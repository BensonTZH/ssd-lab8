import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginSecurity from "eslint-plugin-security";
import { defineConfig } from "eslint/config";

export default defineConfig([
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
    // Spread plugin configs here instead of using string extends
    rules: {
      // Spread rules from @eslint/js recommended
      ...pluginJs.configs.recommended.rules,
      // Spread rules from react flat recommended
      ...pluginReact.configs.flat.recommended.rules,
      // Add security plugin rule(s)
      "security/detect-eval-with-expression": "error",
    },
  },
]);
