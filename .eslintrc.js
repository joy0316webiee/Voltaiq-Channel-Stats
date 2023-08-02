module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    tsconfigRootDir: __dirname,
    project: ["**/tsconfig.json"],
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ["react", "jsx-a11y", "prettier", "import", "react-hooks", "@typescript-eslint"],
  extends: [
    "airbnb",
    "prettier",
    "plugin:react/recommended",
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:storybook/recommended"
  ],
  // Example set global variable
  globals: {
    var1: "writable",
    tracking: "readonly"
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/extensions": [".js", ".jsx", ".ts", ".tsx", ".mjs"],
    "import/parsers": {
      "@typescript-eslint/parser": [".js", ".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "**/tsconfig.json"
      },
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
        resolvePaths: [__dirname],
        moduleDirectory: ["node_modules", "./"]
      }
    }
  },
  env: {
    node: true,
    jest: true,
    browser: true
  },
  ignorePatterns: ["countries/*/out", "countries/*/public", "**/*.config.js", ".eslintrc.js", "app.js"],
  rules: {
    "@typescript-eslint/no-floating-promises": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": ["error"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-var-requires": "off",
    "react/function-component-definition": "off",
    "react/prop-types": "off",
    "react/button-has-type": [
      "off",
      {
        button: true,
        submit: true,
        reset: true
      }
    ],
    "react/destructuring-assignment": ["error", "always"],
    "react/display-name": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/jsx-filename-extension": [
      2,
      {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    ],
    "react/jsx-props-no-spreading": "off",
    "react/jsx-fragments": ["off", "element"],
    "react/require-default-props": "off",
    "react/no-array-index-key": "off",
    "react/no-unescaped-entities": "off",
    "react/no-unstable-nested-components": "off",
    "react-hooks/rules-of-hooks": "error",
    "import/prefer-default-export": "off",
    "import/extensions": [1, "never"],
    "import/no-extraneous-dependencies": "off",
    "import/no-cycle": "off",
    "import/extensions": "off",
    "import/no-unresolved": "off",
    "import/no-mutable-exports": "off",
    "import/order": "off",
    "import/export": "off",
    "default-case-last": "off",
    "no-template-curly-in-string": "off",
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ],
    "no-shadow": "off",
    "no-plusplus": "off",
    "no-await-in-loop": "off",
    "no-param-reassign": "off",
    "no-console": 1,
    "no-unexpected-multiline": "error",
    "no-underscore-dangle": "off",
    "no-use-before-define": "off",
    "no-restricted-exports": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/label-has-associated-control": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "jsx-a11y/label-has-for": [
      "error",
      {
        required: {
          some: ["nesting", "id"]
        }
      }
    ],
    "max-len": [
      "error",
      {
        code: 120,
        ignoreUrls: true,
        ignoreComments: true
      }
    ],
    "global-require": "off",
    camelcase: "off",
    "prettier/prettier": "error",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "import/no-anonymous-default-export": "off"
      }
    }
  ]
};
