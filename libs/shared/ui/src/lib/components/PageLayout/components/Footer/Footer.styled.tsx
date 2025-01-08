import { css, styled } from '@mui/material';

import { PageLayoutWrapperStyled } from '../Styled';

type PageLayoutFooterStyledProps = {
  hasMargin: boolean;
};

export const PageLayoutFooterStyled = styled(PageLayoutWrapperStyled)<PageLayoutFooterStyledProps>`
  grid-column: 1 / -1;
  margin-top: auto;
  ${({ hasMargin }) =>
    hasMargin &&
    css`
      margin-top: 52px;
    `}
`;
