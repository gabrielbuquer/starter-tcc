import { Button, styled } from '@mui/material';

export const OptionButton = styled(Button)`
  ${({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    gap: ${theme.spacing(2)};
    background-color: transparent;
  `};
`;
