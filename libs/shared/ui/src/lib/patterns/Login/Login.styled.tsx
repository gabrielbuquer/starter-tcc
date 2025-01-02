import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing(2)};
    box-sizing: border-box;
  `};
`;
