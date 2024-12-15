import { styled } from '@mui/material';

export const HeaderWrapper = styled('header')`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(1)} ${theme.spacing(4)};
  `};
`;
