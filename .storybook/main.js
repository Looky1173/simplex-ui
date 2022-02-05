const path = require('path');

module.exports = {
    stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
    addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'themeprovider-storybook/register'],
    framework: '@storybook/react',
    webpackFinal: async (config) => {
        config.resolve.alias['#'] = path.resolve(__dirname, '../src');
        config.resolve.alias['#components'] = path.resolve(__dirname, '../src/components');
        return config;
    },
};
