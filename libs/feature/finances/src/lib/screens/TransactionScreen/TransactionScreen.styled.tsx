import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(6)};
    width: 100%;
  `};
`;

export const Content = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
    width: 100%;
  `};
`;

export const Filters = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    gap: ${theme.spacing(2)};
    width: 100%;
  `};
`;
