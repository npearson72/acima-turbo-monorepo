const theme1: Acima.Theme = {
  components: {
    Button: {
      defaultProps: {
        color: 'blue.6',
        radius: 'sm',
        size: 'sm'
      }
    },
    Checkbox: {
      defaultProps: {
        color: 'blue.6',
        radius: 'xl',
        size: 'md'
      }
    }
  },
  other: {
    id: 'theme1',
    name: 'Theme 1'
  }
};

const theme2: Acima.Theme = {
  components: {
    Button: {
      defaultProps: {
        color: 'grape.6',
        radius: 'xl',
        size: 'xs',
        uppercase: true
      }
    },
    Checkbox: {
      defaultProps: {
        color: 'grape.6',
        size: 'sm'
      }
    }
  },
  other: {
    id: 'theme2',
    name: 'Theme 2'
  }
};

export const themes: Acima.Theme[] = [theme1, theme2];

export function themeSelector(id: string) {
  return themes.find(theme => theme.other.id === id);
}
