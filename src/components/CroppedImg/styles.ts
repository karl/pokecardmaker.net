import { styled } from '@css';

export const Wrapper = styled('div')`
  position: relative;
  overflow: hidden;
  height: 100%;
  width: 100%;
`;

export const Img = styled('img')`
  position: absolute;
  top: 0;
  left: 0;
  transform-origin: top left;
`;
