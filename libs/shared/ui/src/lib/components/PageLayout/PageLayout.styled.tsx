import { css, styled } from '@mui/material';

export const StyledPageLayout = styled('div')`
  ${({ theme }) => css`
    background: ${theme.palette.background.default};

    display: grid;
    grid-template-columns: auto minmax(auto, 1fr) auto;
    grid-template-rows: min-content min-content 1fr min-content;
    min-height: 100vh;

    @media (width <= 600px) {
      grid-template-rows: auto;

      > * {
        /* stylelint-disable declaration-no-important */
        grid-column: 1 / -1 !important;
        grid-row: auto !important;
      }
    }
  `}
`;
