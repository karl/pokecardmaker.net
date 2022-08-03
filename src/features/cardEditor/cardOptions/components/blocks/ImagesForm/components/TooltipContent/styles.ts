import { styled } from '@css';
import { Typography } from '@mui/material';

export const ImagesWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing(4, 0)};
  gap: 1em;
  align-items: flex-start;
  min-width: 500px;

  ${({ theme }) => theme.breakpoints.up('md')} {
    flex-direction: row;
    align-items: center;
  }
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
    box-shadow: 5px 5px 20px black;
    background: ${({ theme }) => theme.palette.background.default};
    border-radius: 21px;
  }
`;

export const FullImage = styled('div')`
  display: flex;
  align-items: center;
  max-height: 400px;
  width: 300px;
  position: relative;
`;

export const NumberText = styled(Typography)`
  z-index: 999;
  position: absolute;
  top: -5%;
  left: -5%;
  font-weight: bold;
`;
