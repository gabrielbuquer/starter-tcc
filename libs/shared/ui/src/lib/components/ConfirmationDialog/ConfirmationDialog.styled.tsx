import { Box, css, styled } from '@mui/material';

export const DialogContent = styled(Box)`
  ${({ theme }) => css`
    padding: ${theme.spacing(2)};
    flex: 1 1 auto;
    -webkit-overflow-scrolling: touch;
    overflow-y: auto;
    padding: ${theme.spacing(1)} ${theme.spacing(3)} ${theme.spacing(3)};
  `}
`;
