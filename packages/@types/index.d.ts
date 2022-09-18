import type {
  MantineThemeOverride,
  ButtonProps,
  CheckboxProps
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
    };
    other: {
      id: string;
      name: string;
    };
  }
}

export as namespace Acima;
export = Acima;
