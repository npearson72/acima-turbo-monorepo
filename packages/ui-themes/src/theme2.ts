import {
  MantineThemeOverride,
  ButtonProps,
  CheckboxProps,
  InputProps,
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

const Input: InputProps = {
  radius: 'lg'
};

const Modal: Partial<ModalProps> = {
  overlayOpacity: 0.8,
  overlayColor: 'white',
  radius: 'lg'
};

const Paper: PaperProps = {
  radius: 'md'
};

const theme2: MantineThemeOverride = {
  primaryColor: 'grape',
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
      defaultProps: Modal,
      styles: theme => ({
        modal: {
          background: theme.colors.violet[0],
          border: `1px solid ${theme.colors.grape[2]}`
        }
      })
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
