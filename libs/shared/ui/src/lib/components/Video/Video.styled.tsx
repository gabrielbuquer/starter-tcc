import styled, { css } from 'styled-components';

export const VideoBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    position: relative;
    aspect-ratio: 16 / 9;

    video {
      display: flex;
      object-fit: cover;
      object-position: center;
    }
  `};
`;
