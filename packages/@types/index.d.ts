import type { MantineThemeOverride } from '@mantine/core';

declare namespace Acima {
  interface Theme extends MantineThemeOverride {}

  interface ThemePack {
    id: string;
    name: string;
    theme: Theme;
  }
}

export as namespace Acima;
export = Acima;
