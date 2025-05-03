import { css, styled } from '@mui/material';

export const TotalizerContainer = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(2)};
    width: 100%;
  `};
`;

export const TotalizerLine = styled('div')`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    gap: ${theme.spacing(2)};
    width: 100%;
  `};
`;
