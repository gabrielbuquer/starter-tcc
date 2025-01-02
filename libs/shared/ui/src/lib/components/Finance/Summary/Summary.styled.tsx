import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${theme.palette.common.white};
    border-radius: ${theme.shape.borderRadius}px;
    box-shadow: 0 2px 5px ${theme.palette.grey[300]};
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    box-sizing: border-box;

    & > svg {
      font-size: 40px;
      color: ${theme.palette.primary.main};
      fill: ${theme.palette.primary.main};
    }
  `};
`;

export const TextWrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1.5)};
    flex: 1;
  `};
`;

