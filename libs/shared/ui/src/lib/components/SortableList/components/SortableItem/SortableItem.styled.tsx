import { Paper, css, styled } from '@mui/material';

export const Content = styled(Paper)`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
    align-items: center;
    padding: ${theme.spacing(2)};
    width: 100%;
  `}
`;
