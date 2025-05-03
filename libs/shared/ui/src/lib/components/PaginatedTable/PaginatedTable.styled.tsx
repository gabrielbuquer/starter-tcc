import { css, styled } from '@mui/material';

export const TableFooter = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: ${theme.spacing(2)};
  `}
`;

export const TableActions = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacing(1)};
  `}
`;
