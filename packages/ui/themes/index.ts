const theme1: Acima.Theme = {
  defaultRadius: 'xl',
  components: {
    Button: {
      defaultProps: {
        size: 'xs',
        color: 'grape.6'
      }
    }
  }
};

const theme2: Acima.Theme = {
  defaultRadius: 'sm',
  components: {
    Button: {
      defaultProps: {
        uppercase: true,
        size: 'xs',
        color: 'blue.6'
      }
    }
  }
};

export const themePacks: Acima.ThemePack[] = [
  { id: 'theme1', name: 'Theme 1', theme: theme1 },
  { id: 'theme2', name: 'Theme 2', theme: theme2 }
];

export function themeSelector(id: string) {
  return themePacks.find(themePack => themePack.id === id);
}
