import { Box, css, styled } from '@mui/material';

export const CourseTable = styled(Box)`
  ${({ theme }) => css`
    margin-top: ${theme.spacing(4)};
    position: relative;
  `}
`;
