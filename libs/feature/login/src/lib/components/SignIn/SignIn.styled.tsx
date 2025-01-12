import { css, styled } from '@mui/material';

export const Form = styled('form')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: ${theme.spacing(2)};
    box-sizing: border-box;
  `};
`;
