const theme1: Acima.Theme = {
  components: {
    Button: {
      defaultProps: {
        color: 'grape.6',
        radius: 'xl',
        size: 'sm'
      }
    }
  }
};

const theme2: Acima.Theme = {
  components: {
    Button: {
      defaultProps: {
        color: 'blue.6',
        radius: 'sm',
        size: 'sm',
        uppercase: true
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
