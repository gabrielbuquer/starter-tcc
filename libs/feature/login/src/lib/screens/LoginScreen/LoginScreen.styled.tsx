import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    width: 100%;
    max-width: 440px;
  `};
`;

export const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
    width: 100%;
    padding: ${theme.spacing(3)};
    box-sizing: border-box;
  `};
`;
