import { Box, css, styled } from '@mui/material';

export const Actions = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.spacing(1)};
    margin-top: ${theme.spacing(2)};
  `}
`;

export const LessonsHeader = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${theme.spacing(1)};
    width: 100%;
  `}
`;

export const LessonsBox = styled(Box)`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.spacing(1)};
    width: 100%;
    margin-top: ${theme.spacing(2)};
  `}
`;
