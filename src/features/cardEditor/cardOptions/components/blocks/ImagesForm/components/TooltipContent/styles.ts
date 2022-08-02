import { styled } from '@css';

export const ImagesWrapper = styled('div')`
  display: flex;
  align-items: center;
  width: 850px;
  gap: 1em;
`;

export const PerspectiveWrapper = styled('div')`
  position: relative;
  height: 450px;
  min-width: 480px;
`;

export const PerspectiveImg = styled('div')<{ $translateX?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  height: 500px;
  width: 370px;
  transform: ${({ $translateX = -20 }) =>
    `perspective(800px) rotateY(40deg) scale(${
      0.8 + $translateX / 500
    }) translate(${$translateX}%, -5%)`};
  cursor: pointer;

  &:hover {
    z-index: 999;
    box-shadow: 5px 5px 20px black;
    background: ${({ theme }) => theme.palette.background.default};
    border-radius: 21px;
  }
`;

export const FullImage = styled('div')`
  display: flex;
  align-items: center;
  height: 500px;
`;
