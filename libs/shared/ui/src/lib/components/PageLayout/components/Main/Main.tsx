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
  hasMargin?: boolean;
  centeredContent?: boolean;
  bgColor?: string;
};

export const Main = ({
  children,
  testId,
  id,
  bgColor,
  fullHeight,
  centeredContent = false,
  hasContainer = false,
  hasMargin = true,
}: PageLayoutMainStyledPropTypes) => {
  return (
    <PageLayoutMainStyled
      id={id}
      data-testid={testId}
      as="main"
      hasMargin={hasMargin}
      sx={{ bgcolor: bgColor }}
    >
      {hasContainer ? (
        <PageLayoutContainerStyled fullHeight={fullHeight} centeredContent={centeredContent}>
          {children}
        </PageLayoutContainerStyled>
      ) : (
        children
      )}
    </PageLayoutMainStyled>
  );
};
