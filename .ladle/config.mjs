// This is the config for the Ladle service (like Storybook).
// https://ladle.dev/docs/

export default {
  stories: [
    'stories/src/**/*.story.{js,jsx,ts,tsx}',
    'packages/ui/components/**/*.story.{js,jsx,ts,tsx}'
  ],
  addons: {
    rtl: {
      enabled: false
    }
  }
};
