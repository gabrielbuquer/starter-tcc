import { ToastContentProps, ToastOptions } from 'react-toastify';

type ButtonProps = {
  text: string;
  action: () => void;
};

export type ShowSnackBarProps = Omit<ToastOptions, 'theme' | 'closeButton'> & {
  button?: ButtonProps;
  message: string;
  timeout?: ToastOptions['autoClose'];
};

export type SnackBarBaseComponentProps = {
  button?: ButtonProps;
  message: string;
  closeToast?: ToastContentProps['closeToast'];
};

export type DismissSnackBarProps = {
  componentId: string | number;
};
