import { css, styled } from '@mui/material';

export const HeaderWrapper = styled('header')`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
    gap: ${theme.spacing(2)};
    padding: ${theme.spacing(1)} ${theme.spacing(4)};
    background-color: ${theme.palette.common.white};

    ${theme.breakpoints.down('md')} {
      display: flex;

      padding: ${theme.spacing(1)} ${theme.spacing(2)};
    }
  `};
`;

export const Actions = styled('div')`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: ${theme.spacing(.5)}
  `};
`;

