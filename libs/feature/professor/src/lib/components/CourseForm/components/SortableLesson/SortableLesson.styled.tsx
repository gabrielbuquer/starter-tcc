import { css, styled } from '@mui/material';

export const Card = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(1)};
    cursor: pointer;
    width: 100%;
  `}
`;

export const Info = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    flex: 1;
  `}
`;
