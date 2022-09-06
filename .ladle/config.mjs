// This is the config for the Ladle service (like Storybook).
// https://ladle.dev/docs/

export default {
  stories: ['stories/src/**/*.stories.{js,jsx,ts,tsx}'],
  appendToHead:
    '<style>#ladle-root {flex-direction: row-reverse !important}</style>',
  addons: {
    rtl: {
      enabled: false
    }
  }
};
