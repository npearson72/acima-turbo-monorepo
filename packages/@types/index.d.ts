declare namespace Acima {
  interface ITheme {
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

  interface IThemes {
    [key: string]: ITheme;
  }

  interface IThemeStruct {
    id: string;
    name: string;
    theme: ITheme;
  }
}

export as namespace Acima;
