const theme1: Acima.ITheme = {
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

const theme2: Acima.ITheme = {
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

export const themes: Acima.IThemeStruct[] = [
  { id: 'theme1', name: 'Theme 1', theme: theme1 },
  { id: 'theme2', name: 'Theme 2', theme: theme2 }
];

export function themeSelector(id: string) {
  return themes.find(theme => theme.id === id);
}
