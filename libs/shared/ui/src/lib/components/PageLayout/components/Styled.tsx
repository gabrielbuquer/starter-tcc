import { css, styled } from '@mui/material';

export const PageLayoutWrapperStyled = styled('div')`
  ${({ theme }) => css`
  `}
`;

export type PageLayoutContainerStyledProps = {
  fullHeight?: boolean;
};

export const PageLayoutContainerStyled = styled('div')<PageLayoutContainerStyledProps>`
  ${({ theme, fullHeight = true }) => css`
    width: 100vw;

    ${fullHeight &&
    css`
      min-height: 85vmax;
    `}

    ${theme.breakpoints.up('md')} {
      width: calc(100vw - ${theme.spacing[800]});
      max-width: 1400px;
      ${fullHeight &&
      css`
        min-height: 80vh;
      `}
      margin: 0 auto;p
    }
  `}
`;
