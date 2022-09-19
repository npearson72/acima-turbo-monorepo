import {
  MantineThemeOverride,
  ButtonProps,
  CheckboxProps,
  ModalProps,
  PaperProps
} from '@mantine/core';

const Button: ButtonProps = {
  color: 'grape.6',
  radius: 'xl',
  size: 'xs',
  uppercase: true
};

const Checkbox: CheckboxProps = {
  color: 'grape.6',
  size: 'sm'
};

const Modal: Partial<ModalProps> = {
  radius: 'md'
};

const Paper: PaperProps = {
  radius: 'md'
};

const theme2: MantineThemeOverride = {
  components: {
    Button: {
      defaultProps: Button
    },
    Checkbox: {
      defaultProps: Checkbox
    },
    Modal: {
      defaultProps: Modal
    },
    Paper: {
      defaultProps: Paper
    }
  },
  other: {
    id: 'theme2',
    name: 'Theme 2'
  }
};

export default theme2;
