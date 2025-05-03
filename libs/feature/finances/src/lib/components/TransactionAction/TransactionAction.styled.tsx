import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacing(1)};
  `};
`;
