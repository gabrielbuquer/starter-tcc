import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: grid;
    grid-template-columns: max-content minmax(160px, 1fr) minmax(
        min-content,
        auto
      );
    align-items: center;
    width: 100%;
  `}
`;
