import { css, styled } from '@mui/material';

export const StyledPageLayout = styled('div')`
  ${({ theme }) => css`
    background: ${theme.palette.background.default};
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `}
`;
