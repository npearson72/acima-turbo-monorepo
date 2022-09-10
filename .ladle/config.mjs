// This is the config for the Ladle service (like Storybook).
// https://ladle.dev/docs/

export default {
  stories: ['stories/src/**/*.stories.{js,jsx,ts,tsx}'],
  addons: {
    rtl: {
      enabled: false
    }
  }
};
