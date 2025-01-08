import { ReactNode } from 'react';

import {
  PageLayoutContainerStyled,
} from '../Styled';

import { PageLayoutFooterStyled } from './Footer.styled';

export type PageLayoutFooterStyledPropTypes =
  {
    id: string;
    testId: string;
    hasContainer?: boolean;
    children: ReactNode;
    hasMargin?: boolean;
  };

export const Footer = ({
  children,
  testId,
  id,
  hasContainer = false,
  hasMargin = true,
}: PageLayoutFooterStyledPropTypes) => {
  return (
    <PageLayoutFooterStyled
      id={id}
      data-testid={testId}
      as="div"
      hasMargin={hasMargin}
    >
      {hasContainer ? (
        <PageLayoutContainerStyled>{children}</PageLayoutContainerStyled>
      ) : (
        children
      )}
    </PageLayoutFooterStyled>
  );
};
