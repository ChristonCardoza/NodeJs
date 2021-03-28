module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-docs", // lower than v6 this one required
    "@storybook/addon-knobs",
    "@storybook/addon-viewport", // lower than v6 this one required
    '@storybook/addon-a11y'

  ]
}