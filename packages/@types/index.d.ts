import type {
  MantineThemeOverride,
  ButtonProps,
  CheckboxProps,
  PaperProps
} from '@mantine/core';

declare namespace Acima {
  interface Theme extends MantineThemeOverride {
    components: {
      Button: {
        defaultProps: Pick<
          ButtonProps,
          'color' | 'radius' | 'size' | 'uppercase'
        >;
      };
      Checkbox: {
        defaultProps: Pick<CheckboxProps, 'color' | 'size' | 'radius'>;
      };
      Paper: {
        defaultProps: Pick<PaperProps, 'radius'>;
      };
    };
    other: {
      id: string;
      name: string;
    };
  }
}

export as namespace Acima;
export = Acima;
