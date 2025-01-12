import { styled } from '@mui/material';

import { PageLayoutWrapperStyled } from '../Styled';

export const PageLayoutHeaderStyled = styled(PageLayoutWrapperStyled)`
  grid-column: 1 / -1;
  position: sticky;
  z-index: 99;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;
