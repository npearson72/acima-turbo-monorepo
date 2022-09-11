declare interface ITheme {
  components: {
    Button: {
      defaultProps: {
        uppercase?: boolean;
        size: string;
        radius: string;
        color: string;
      };
    };
  };
}

declare interface IThemes {
  [key: string]: ITheme;
}
