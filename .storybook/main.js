const path = require('path');

module.exports = {
  core: {},
  stories: [],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    'storybook-addon-cookie',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {
      nextConfigPath: path.resolve(__dirname, './next.config.js'),
    },
  },
  docs: {
    autodocs: false,
  },
};
