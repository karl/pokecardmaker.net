import { css, styled } from '@css';
import { Size } from '@cardEditor/cardStyles';
import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { Font } from '@utils/fonts';

export const Wrapper = styled(CardText)<{ $size: Size }>`
  display: block;
  position: absolute;
  text-align: right;

  ${({ $size }) =>
    $size === 'sm'
      ? css`
          top: 3.5%;
          right: 13.2%;
        `
      : css`
          top: 2.5%;
          right: 13.8%;
        `};
`;

export const HPText = styled('span')<{ $size: Size }>`
  ${({ $size }) =>
    $size === 'sm'
      ? css`
          font-family: '${Font.GillSansStdUltraBold}', monospace;
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
  font-family: '${Font.FuturaLTMediumBold}', monospace;
  letter-spacing: -0.05em;

  ${({ $size }) =>
    $size === 'sm'
      ? css`
          font-size: 2.7em;
        `
      : css`
          font-size: 3.55em;
        `};
`;
