module.exports = {
  extends: [
    'airbnb',
    'plugin:prettier/recommended',
    // "prettier/react"
  ],
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'jsx-a11y/href-no-hash': ['off'],
    'react/destructuring-assignment': ['off'],
    'class-methods-use-this': ['off'],
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    'max-len': [
      'warn',
      {
        // "code": (SET BY USER),
        tabWidth: 2,
        // "comments": (SET BY USER),
        ignoreComments: false,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
  },
};
