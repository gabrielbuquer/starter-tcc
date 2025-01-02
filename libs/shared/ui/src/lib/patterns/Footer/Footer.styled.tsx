import { css, styled } from '@mui/material';

export const Container = styled('footer')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
  `};
`;

