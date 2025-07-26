// eslint.config.mjs
import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    // Add custom rules here
    rules: {
      // Disable the rule for unescaped entities, as we're explicitly handling them
      "react/no-unescaped-entities": "off",
      // Disable the warning for <img> tags if you're not using next/image
      "@next/next/no-img-element": "off",
    },
  },
];

export default eslintConfig;
