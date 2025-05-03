import { Box, css, styled } from '@mui/material';

export const Actions = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    margin-top: ${theme.spacing(2)};
  `}
`;
