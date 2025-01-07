import { css, Menu, styled } from '@mui/material';

export const UserMenu = styled(Menu)`
${({ theme }) => css`
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
    & .MuiList-root {
      padding: 0 0 ${theme.spacing(1)} 0;
      min-width: 220px;
      max-width: 100%;
    }
    & .MuiPaper-root {
      overflow: visible;
      filter: drop-shadow(0px 2px 8px rgba(0,0,0,0.32));
      margin-top: ${theme.spacing(1.5)};

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        right: 20px;
        width: 10px;
        height: 10px;
        background: ${theme.palette.background.paper};
        transform: translateY(-50%) rotate(45deg);
        z-index: 0;
      }
    }

  `};
`;

export const UserWrapper = styled('div')`
  ${({ theme }) => css`
    padding: ${theme.spacing(1)} ${theme.spacing(2)};
  `};
`;
