import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};
    width: 100%;
  `};
`;

export const MainGrid = styled('div')`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: ${theme.spacing(4)};

    ${theme.breakpoints.down('lg')} {
      display: flex;
      flex-direction: column;
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

export const Content = styled('div')`
  ${({ theme }) => css`
  `};
`;
