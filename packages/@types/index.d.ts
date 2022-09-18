declare namespace Acima {
  interface Theme extends MantineThemeOverride {
    components?: {
      Button?: {
        defaultProps: Partial<ButtonProps>;
      };
      Checkbox?: {
        defaultProps: Partial<CheckboxProps>;
      };
    };
    other: Record<string, any>;
  }
}

export as namespace Acima;
export = Acima;
