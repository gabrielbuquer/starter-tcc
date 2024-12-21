import { styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(1)} ${theme.spacing(4)};
  `};
`;
