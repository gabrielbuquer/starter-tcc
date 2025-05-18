import { css, styled } from '@mui/material';

export const List = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(2)};
    cursor: pointer;
    width: 100%;
  `}
`;
