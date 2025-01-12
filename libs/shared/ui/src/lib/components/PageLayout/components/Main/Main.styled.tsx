import { css, styled } from '@mui/material';

import { PageLayoutWrapperStyled } from '../Styled';

export const PageLayoutMainStyled = styled(PageLayoutWrapperStyled)<{
  hasMargin: boolean;
}>`
  ${({ theme, hasMargin }) => css`
    flex: 1;

    ${hasMargin &&
    css`
      padding-top: ${theme.spacing(3)};
    `}
  `}
`;
