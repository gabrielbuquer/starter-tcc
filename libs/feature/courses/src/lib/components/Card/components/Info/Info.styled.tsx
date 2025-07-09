import { css, styled } from '@mui/material';

export const Box = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(1)};
    padding: ${theme.spacing(0.6)} ${theme.spacing(2)};
    box-sizing: border-box;
  `};
`;

export const Content = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    width: 100%;
  `};
`;
