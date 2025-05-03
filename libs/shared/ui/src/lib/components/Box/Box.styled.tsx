import { css, styled } from '@mui/material';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    width: 100%;
  `};
`;

export const Wrapper = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    width: 100%;
    background-color: ${theme.palette.common.white};
    border-radius: ${theme.shape.borderRadius}px;
    box-shadow: 0 2px 5px #61616130;
    box-sizing: border-box;
  `};
`;

