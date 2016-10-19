module.exports = {
  "extends": "airbnb",
  "plugins": [
    "react",
    "jsx-a11y",
    "import"
  ],
  "env": {
    "browser": true
  },
  "rules": {
    "no-console": 0,
    "no-unused-vars": [2, { "argsIgnorePattern": "^_" }],
    "import/newline-after-import": 0,
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
  }
};
