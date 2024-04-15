import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      semi: ["error", "never"],
      "comma-dangle": [2, "never"],
      "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
      "no-use-before-define": [
        "error",
        { functions: false, classes: true, variables: false },
      ],
    },
  },
];