import { css, styled } from '@mui/material';

import { PageLayoutWrapperStyled } from '../Styled';

export const PageLayoutMainStyled = styled(PageLayoutWrapperStyled)<{
  width: string;
  hasMargin: boolean;
}>`
  ${({ theme, width = '100%', hasMargin }) => css`
    width: ${width};
    flex: 1;

    ${hasMargin &&
    css`
      padding-top: ${theme.spacing(3)};
    `}
  `}
`;
