import styled, { css } from 'styled-components';

export const VideoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    aspect-ratio: 16 / 9;
    max-width: 100%;

    video {
      display: flex;
      object-fit: cover;
      object-position: center;
    }
  `};
`;
