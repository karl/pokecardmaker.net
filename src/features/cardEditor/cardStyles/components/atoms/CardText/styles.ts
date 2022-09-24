import { TextColor } from '@cardEditor/cardStyles';
import { css, styled } from '@css';
import { Font } from '@utils/fonts';

export const Text = styled('p')<{
  $color: TextColor;
  $outline?: TextColor;
  $base?: boolean;
}>`
  margin: 0;
  color: ${({ $color }) => $color};
  white-space: pre;
  position: relative;

  ${({ $outline }) =>
    !!$outline &&
    css`
      -webkit-text-stroke: ${`3px ${$outline}`};
    `};
`;

export const TextInner = styled('p')<{
  $color: TextColor;
}>`
  margin: 0;
  color: ${({ $color }) => $color};
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-text-stroke: 0;
`;

export const SpecialCharacter = styled('span')`
  font-family: '${Font.PkmnTCGSpecialCharacters}', monospace;
  line-height: 0;
`;
