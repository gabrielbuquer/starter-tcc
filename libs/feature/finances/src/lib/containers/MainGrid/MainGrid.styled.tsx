import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    width: 100%;
  `};
`;

export const Grid = styled('div')`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: ${theme.spacing(2)};

    ${theme.breakpoints.down('lg')} {
      grid-template-columns: repeat(2, 1fr);
      gap: ${theme.spacing(1)};
    }
  `};
`;
