import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    max-width: 400px;
  `};
`;

export const Wrapper = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing(2)};
    box-sizing: border-box;
  `};
`;
