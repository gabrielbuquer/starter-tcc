import { LoopOutlined } from '@mui/icons-material';
import { css, styled } from '@mui/material';

import { hexToRGBA } from '@monetix/core-utils';

import { BoxLoaderProps, LoaderProps } from './Loader.types';

export const PageLoaderContainer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: ${theme.spacing(0)};
    left: ${theme.spacing(0)};
    bottom: ${theme.spacing(0)};
    right: ${theme.spacing(0)};
    z-index: 9;
    background-color: ${hexToRGBA(theme.palette.grey[100], 0.8)};
  `}
`;

export const ComponentLoaderContainer = styled('div')<LoaderProps>`
  ${({ theme, isFullHeight }) => css`
    height: ${isFullHeight ? '100vh' : 'auto'};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: auto;
    align-items: center;
    display: flex;
    justify-content: center;
    background-color: ${hexToRGBA(theme.palette.grey[100], 0.8)};
    z-index: 9;
  `}
`;

export const BoxLoader = styled('div')<BoxLoaderProps>`
  ${({ theme, direction = 'column' }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme.palette.primary.main};
    position: relative;
    gap: ${theme.spacing[200]};
    flex-direction: ${direction === 'column' ? 'column' : 'row'};
  `}
`;

export const LoadingIcon = styled(LoopOutlined)`
  ${({ theme }) => css`
    width: ${theme.spacing[500]};
    height: ${theme.spacing[500]};
    will-change: transform;

    @keyframes rotation {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(359deg);
      }
    }

    animation: rotation 1.5s infinite linear;
  `}
`;
