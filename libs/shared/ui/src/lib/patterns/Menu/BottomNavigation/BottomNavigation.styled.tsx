import { css, styled } from '@mui/material';

export const Container = styled('nav')`
  ${({ theme }) => css`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
  `};
`;

