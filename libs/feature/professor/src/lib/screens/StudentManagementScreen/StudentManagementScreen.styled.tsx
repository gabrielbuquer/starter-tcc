import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(3)};
    width: 100%;
  `};
`;

export const Controllers = styled('aside')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.spacing(2)};
  `};
`;

export const Actions = styled('div')`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(2)};
    justify-content: space-between;
    width: 100%;
  `};
`;

export const Content = styled('div')`
  ${({ theme }) => css``};
`;
