export interface ICustomTheme {
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

const theme1: ICustomTheme = {
  components: {
    Button: {
      defaultProps: {
        size: 'xs',
        radius: 'xl',
        color: 'grape.6'
      }
    }
  }
};

const theme2: ICustomTheme = {
  components: {
    Button: {
      defaultProps: {
        uppercase: true,
        size: 'xs',
        radius: 'sm',
        color: 'blue.6'
      }
    }
  }
};

interface ICustomThemeMap {
  [key: string]: ICustomTheme;
}

const themes: ICustomThemeMap = {
  theme1,
  theme2
};

export function themeSelector(theme: string) {
  return themes[theme];
}
