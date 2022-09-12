import type { MantineThemeOverride, ButtonProps } from '@mantine/core';

declare namespace Acima {
  interface Theme extends MantineThemeOverride {
    components?: {
      Button?: {
        defaultProps: Partial<ButtonProps>;
      };
    };
  }

  interface ThemePack {
    id: string;
    name: string;
    theme: Theme;
  }
}

export as namespace Acima;
export = Acima;
