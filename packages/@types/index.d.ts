import type { MantineColor, MantineNumberSize } from '@mantine/core';

declare namespace Acima {
  interface ITheme {
    defaultRadius?: MantineNumberSize | number;
    components?: {
      Button?: {
        defaultProps: {
          uppercase?: boolean;
          size?: MantineNumberSize | number;
          radius?: MantineNumberSize | number;
          color?: MantineColor;
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
export = Acima;
