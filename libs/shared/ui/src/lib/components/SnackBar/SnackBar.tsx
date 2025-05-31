import { cssTransition, toast } from 'react-toastify';
import Close from '@mui/icons-material/Close';

import { isServerSide } from '@monetix/core-utils';

import { WrapperToastify } from './Toastify.styled';
import * as S from './SnackBar.styled';
import {
  DismissSnackBarProps,
  ShowSnackBarProps,
  SnackBarBaseComponentProps,
} from './SnackBar.types';

const transition = cssTransition({
  enter: 'animate__entering',
  exit: 'animate__exiting',
});

const SnackBarBaseComponent = ({
  message,
  button,
  closeToast,
}: SnackBarBaseComponentProps) => {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.Text variant="body1">{message}</S.Text>
        {button && (
          <S.SnackButton onClick={button.action}>{button.text}</S.SnackButton>
        )}
      </S.TextWrapper>
      <S.CloseButton onClick={closeToast}>
        <Close />
      </S.CloseButton>
    </S.Wrapper>
  );
};

export const showSnackBar = ({
  timeout,
  autoClose,
  icon,
  ...props
}: ShowSnackBarProps) => {
  return toast(<SnackBarBaseComponent {...props} />, {
    transition,
    draggable: isServerSide() || 'ontouchstart' in window,
    autoClose: autoClose || timeout,
    icon: !!icon && icon,
    ...props,
  });
};

export const dismissSnackBar = ({ componentId }: DismissSnackBarProps) => {
  toast.dismiss(componentId);
};

export const SnackBar = () => (
  <WrapperToastify>
    <S.Toast
      position="bottom-center"
      autoClose={4000}
      closeButton={false}
      closeOnClick={false}
    />
  </WrapperToastify>
);
