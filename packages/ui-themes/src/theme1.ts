import {
  MantineThemeOverride,
  ButtonProps,
  CheckboxProps,
  InputProps,
  ModalProps,
  PaperProps
} from '@mantine/core';

const Button: Partial<ButtonProps> = {
  color: 'blue.6',
  radius: 'sm',
  size: 'sm'
};

const Checkbox: Partial<CheckboxProps> = {
  color: 'blue.6',
  radius: 'xl',
  size: 'sm',
  sx: {
    input: {
      cursor: 'pointer'
    }
  }
};

const Input: Partial<InputProps> = {
  radius: 'sm'
};

const Modal: Partial<ModalProps> = {
  overlayOpacity: 0.2,
  radius: 'md'
};

const Paper: Partial<PaperProps> = {
  radius: 'xs'
};

const theme1: MantineThemeOverride = {
  components: {
    Button: {
      defaultProps: Button
    },
    Checkbox: {
      defaultProps: Checkbox
    },
    Input: {
      defaultProps: Input
    },
    Modal: {
      defaultProps: Modal
    },
    Paper: {
      defaultProps: Paper
    }
  },
  other: {
    id: 'theme1',
    name: 'Theme 1'
  }
};

export default theme1;
