import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.section`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-columns: max-content minmax(160px, 1fr) minmax(
        min-content,
        auto
      );
    align-items: center;
    width: 100%;
    padding: ${theme.spacing[100]};
  `}
`;
