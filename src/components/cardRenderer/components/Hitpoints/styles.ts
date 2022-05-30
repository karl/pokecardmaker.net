import { CardText } from '@components/cardRenderer/CardText';
import { css, styled } from '@css';
import { Size } from '@interfaces/cardOptions/cardStyles';

export const Wrapper = styled(CardText)<{ $size: Size }>`
  display: block;
  position: absolute;
  text-align: right;

  ${({ $size }) =>
    $size === 'sm'
      ? css`
          top: 3.3%;
          right: 13%;
        `
      : css`
          top: 2.5%;
          right: 13.6%;
        `};
`;

export const HPText = styled('span')<{ $size: Size }>`
  ${({ $size }) =>
    $size === 'sm'
      ? css`
          font-family: 'Gill Sans Std Ultra Bold', monospace;
          font-size: 1.0625em;
          letter-spacing: -0.035em;
          font-weight: bold;
        `
      : css`
          font-family: 'Gill Sans Std', monospace;
          font-size: 1.25em;
          letter-spacing: -0.035em;
          font-weight: bold;
        `};
`;

export const HPNumbers = styled('span')<{ $size: Size }>`
  font-family: 'Futura LT Medium Bold', monospace;
  letter-spacing: -0.05em;

  ${({ $size }) =>
    $size === 'sm'
      ? css`
          font-size: 2.7875em;
        `
      : css`
          font-size: 3.55em;
        `};
`;
