import { css, styled } from '@mui/material';

import { PageLayoutWrapperStyled } from '../Styled';

export const PageLayoutMainStyled = styled(PageLayoutWrapperStyled)<{
  width: string;
  hasMargin: boolean;
}>`
  ${({ theme, width = '100%', hasMargin }) => css`
    grid-column: 2 / 3;
    width: ${width};
    min-height: 100vh;

    ${hasMargin &&
    css`
      padding-top: ${theme.spacing[200]};
    `}
  `}
`;
