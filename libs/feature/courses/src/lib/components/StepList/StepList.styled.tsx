import { css, styled } from '@mui/material';

export const Container = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(2)};
    width: 100%;
  `};
`;

export const Wrapper = styled('div')`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    width: 100%;
  `};
`;

export const LessonStatus = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${theme.spacing(2.5)};
    height: ${theme.spacing(2.5)};
    background-color: ${theme.palette.grey[300]};
    border-radius: 50%;
  `};
`;
