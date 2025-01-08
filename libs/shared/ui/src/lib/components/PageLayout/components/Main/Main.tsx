import { ReactNode } from 'react';

import {
  PageLayoutContainerStyled,
  PageLayoutWrapperStyledPropsType,
} from '../Styled';

import { PageLayoutMainStyled } from './Main.styled';

export type PageLayoutMainStyledPropTypes = PageLayoutWrapperStyledPropsType & {
  id: string;
  testId: string;
  fullHeight?: boolean;
  hasContainer?: boolean;
  children: ReactNode;
  width?: string;
  hasMargin?: boolean;
};

export const Main = ({
  children,
  testId,
  id,
  background,
  backgroundOpacity,
  fullHeight,
  hasContainer = false,
  width,
  hasMargin = true,
}: PageLayoutMainStyledPropTypes) => {
  return (
    <PageLayoutMainStyled
      id={id}
      background={background}
      backgroundOpacity={backgroundOpacity}
      data-testid={testId}
      as="main"
      width={width}
      hasMargin={hasMargin}
    >
      {hasContainer ? (
        <PageLayoutContainerStyled fullHeight={fullHeight}>
          {children}
        </PageLayoutContainerStyled>
      ) : (
        children
      )}
    </PageLayoutMainStyled>
  );
};
