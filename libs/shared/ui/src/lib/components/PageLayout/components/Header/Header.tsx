import { ReactNode } from 'react';

import {
  PageLayoutContainerStyled,
  PageLayoutWrapperStyledPropsType,
} from '../Styled';

import { PageLayoutHeaderStyled } from './Header.styled';

export type PageLayoutHeaderStyledPropTypes =
  PageLayoutWrapperStyledPropsType & {
    id: string;
    testId: string;
    hasContainer?: boolean;
    children: ReactNode;
  };

export const Header = ({
  children,
  testId,
  id,
  hasContainer = false,
}: PageLayoutHeaderStyledPropTypes) => {
  return (
    <PageLayoutHeaderStyled
      id={id}
      data-testid={testId}
      as="header"
    >
      {hasContainer ? (
        <PageLayoutContainerStyled>{children}</PageLayoutContainerStyled>
      ) : (
        children
      )}
    </PageLayoutHeaderStyled>
  );
};
