const theme1: ITheme = {
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

const theme2: ITheme = {
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

export const themes = [
  { id: 'theme1', name: 'Theme 1', data: theme1 },
  { id: 'theme2', name: 'Theme 2', data: theme2 }
];

export function themeSelector(id: string) {
  return themes.find(theme => theme.id === id);
}
