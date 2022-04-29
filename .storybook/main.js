module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/vue',
  core: {
    builder: 'storybook-builder-vite-vue2',
  },
  // features: {
  //   storyStoreV7: true,
  // },
  viteFinal: (config) => {
    console.log({ config });
    return config;
  },
};
