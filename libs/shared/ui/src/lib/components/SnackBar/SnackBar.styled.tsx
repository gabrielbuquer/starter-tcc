import { ToastContainer } from 'react-toastify';
import { Typography, css, keyframes, styled } from '@mui/material';

export const Toast = styled(ToastContainer)`
  ${({ theme }) => css`
    width: 312px;
    max-width: calc(100vw - ${theme.spacing[600]});
    ${theme.breakpoints.up('lg')} {
      width: 456px;
    }
    padding: ${theme.spacing[0]};

    .Toastify__progress-bar--default,
    .Toastify__progress-bar {
      background: ${theme.palette.grey[800]};
    }
    .Toastify__toast-body {
      padding: ${theme.spacing[0]};
      margin: ${theme.spacing[0]};
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .Toastify__toast {
      padding: ${theme.spacing(1)} ${theme.spacing(2)};
      margin: ${theme.spacing(1)};
      border-radius: ${theme.spacing(0.5)};
      box-shadow: ${theme.shadows[10]};
      background-color: ${theme.palette.grey[600]};
      cursor: default;
    }

    .Toastify__toast--success {
      background-color: ${theme.palette.success.main};
      .Toastify__progress-bar--success {
        background-color: ${theme.palette.success.dark};
      }
      .Toastify__toast-icon {
        color: ${theme.palette.common.white};
      }
    }
    .Toastify__toast--error {
      background-color: ${theme.palette.error.main};
      .Toastify__progress-bar--error {
        background-color: ${theme.palette.error.dark};
      }
      .Toastify__toast-icon {
        color: ${theme.palette.common.white};
      }
    }
    .Toastify__toast--warning {
      background-color: ${theme.palette.warning.main};
      .Toastify__progress-bar--warning {
        background-color: ${theme.palette.warning.dark};
      }
      .Toastify__toast-icon {
        color: ${theme.palette.common.white};
      }
    }
    .Toastify__toast--info {
      background-color: ${theme.palette.info.main};
      .Toastify__progress-bar--info {
        background-color: ${theme.palette.info.dark};
      }
      .Toastify__toast-icon {
        color: ${theme.palette.common.white};
      }
    }
    .animate__entering {
      animation: ${enteringKeyFrame({
          from: 0,
          to: 1,
        })}
        0.6s linear both;
    }
    .animate__exiting {
      animation: ${exitingKeyFrame({
          from: 1,
          to: 0,
        })}
        0.6s linear both;
    }
  `};
`;

export const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    gap: ${theme.spacing(1)};
  `}
`;

export const TextWrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex: 1;
    align-items: center;
    gap: ${theme.spacing(1)};
  `}
`;

export const Text = styled(Typography)`
  ${({ theme }) => css`
    color: ${theme.palette.common.white};
    font-family: ${theme.typography.body1.fontFamily};
    font-size: ${theme.typography.body1.fontSize};
    font-weight: ${theme.typography.body1.fontWeight};
    line-height: ${theme.typography.body1.lineHeight};
    text-align: left;
    text-decoration: none;
  `}
`;

export const SnackButton = styled('button')`
  ${({ theme }) => css`
    border: none;
    background: none;
    text-decoration: underline;
    cursor: pointer;
    font-family: ${theme.typography.body1.fontFamily};
    font-size: ${theme.typography.body1.fontSize};
    font-weight: ${theme.typography.body1.fontWeight};
    line-height: ${theme.typography.body1.lineHeight};
  `}
`;

export const CloseButton = styled('button')`
  border: none;
  padding: 0;
  background: none;
  height: 24px;
  cursor: pointer;
  svg {
    color: ${({ theme }) => theme.palette.common.white};
  }
`;

const enteringKeyFrame = ({
  from,
  to,
}: {
  from: number;
  to: number;
}) => keyframes`
  0% {
    opacity: ${from};
  }
  100% {
    opacity: ${to};
  }
`;

const exitingKeyFrame = ({
  from,
  to,
}: {
  from: number;
  to: number;
}) => keyframes`
  0% {
    opacity: ${from};
  }
  100% {
    opacity: ${to};
  }
`;
