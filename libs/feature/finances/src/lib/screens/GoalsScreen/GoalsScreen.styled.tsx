import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(6)};
    width: 100%;
  `};
`;

export const MainGrid = styled('div')`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: ${theme.spacing(4)};
    ${theme.breakpoints.down('lg')} {
      grid-template-columns: minmax(0, 1fr);
    }
  `};
`;

export const Controllers = styled('aside')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(2)};
  `};
`;

export const Filter = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacing(2)};
  `};
`;

export const Content = styled('div')`
  ${({ theme }) => css``};
`;
