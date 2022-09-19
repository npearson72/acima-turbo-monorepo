import {
  MantineThemeOverride,
  ButtonProps,
  CheckboxProps,
  InputProps,
  ModalProps,
  PaperProps
} from '@mantine/core';

const Button: ButtonProps = {
  color: 'blue.6',
  radius: 'sm',
  size: 'sm'
};

const Checkbox: CheckboxProps = {
  color: 'blue.6',
  radius: 'xl',
  size: 'sm'
};

const Input: InputProps = {
  radius: 'sm'
};

const Modal: Partial<ModalProps> = {
  overlayOpacity: 0.2,
  radius: 'md'
};

const Paper: PaperProps = {
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
