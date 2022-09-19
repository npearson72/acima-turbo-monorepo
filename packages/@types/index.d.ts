import type {
  MantineThemeOverride,
  ButtonProps,
  CheckboxProps,
  ModalProps,
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
      Modal: {
        defaultProps: Pick<ModalProps, 'radius'>;
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
