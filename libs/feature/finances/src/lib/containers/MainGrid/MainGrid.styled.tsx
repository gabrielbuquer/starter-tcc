import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    width: 100%;
  `};
`;

export const Grid = styled('div')`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(2)};

    ${theme.breakpoints.down('lg')} {
      gap: ${theme.spacing(1)};
      flex-wrap: wrap;

      & > * {
        flex: 1 1 calc(50% - ${theme.spacing(0.5)});
        max-width: calc(50% - ${theme.spacing(0.5)});
      }

      & > *:nth-last-child(1):nth-child(odd) {
        flex: 1 1 100%;
        max-width: 100%;
      }
    }
  `}
`;
