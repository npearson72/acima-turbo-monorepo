import theme1 from './theme1';
import theme2 from './theme2';

export const themes = [theme1, theme2];

export function themeSelector(id: string) {
  return themes.find(theme => theme.other?.id === id);
}
