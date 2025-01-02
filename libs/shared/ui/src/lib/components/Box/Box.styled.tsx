import { css, styled } from '@mui/material';
import { Box } from '@mui/material';

export const Wrapper = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${theme.palette.common.white};
    border-radius: ${theme.shape.borderRadius}px;
    box-shadow: 0 2px 5px ${theme.palette.grey[300]};
    box-sizing: border-box;
  `};
`;

