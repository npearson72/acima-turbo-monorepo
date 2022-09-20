// This is the config for the Ladle service (like Storybook).
// https://ladle.dev/docs/

// The paths in the `stories` field are relative to the runtime root, which is
// where the package.json file is for this package.
export default {
  stories: [
    'src/**/*.story.{js,jsx,ts,tsx}',
    '../ui-*/**/*.story.{js,jsx,ts,tsx}'
  ],
  addons: {
    rtl: {
      enabled: false
    }
  }
};
