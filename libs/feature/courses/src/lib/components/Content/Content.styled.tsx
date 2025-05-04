import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    width: 100%;
  `};
`;

export const Header = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: ${theme.spacing(2)};
    border-bottom: 1px solid ${theme.palette.divider};
  `};
`;

export const Main = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: ${theme.spacing(2)};
  `};
`;

export const Footer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
  `};
`;
