import { Box, css, styled } from '@mui/material';

export type PageLayoutWrapperStyledPropsType = {

}

export const PageLayoutWrapperStyled = styled(Box)`
  ${({ theme }) => css`

  `}
`;

export type PageLayoutContainerStyledProps = {
  fullHeight?: boolean;
  centeredContent?: boolean;
};

export const PageLayoutContainerStyled = styled('div')<PageLayoutContainerStyledProps>`
  ${({ theme, fullHeight = true, centeredContent = false }) => css`
    display: flex;
    flex-direction: column;
    width: 100vw;
    padding: 0 ${theme.spacing(2)};

    ${fullHeight &&
    css`
      min-height: 85vmax;
    `}

    ${centeredContent &&
    css`
      align-items: center;
      justify-content: center;
    `}

    ${theme.breakpoints.up('md')} {
      width: calc(100vw - ${theme.spacing(6)});
      max-width: 1400px;
      ${fullHeight &&
      css`
        min-height: 80vh;
      `}
      margin: 0 auto;p
    }
  `}
`;
