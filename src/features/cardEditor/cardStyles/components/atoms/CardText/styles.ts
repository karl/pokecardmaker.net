import { TextColor } from '@cardEditor/cardStyles';
import { css, styled } from '@css';
import { Font } from '@utils/fonts';

export const Text = styled('p')<{
  $color: TextColor;
  $outline?: TextColor;
}>`
  margin: 0;
  color: ${({ $color }) => $color};
  white-space: pre;

  ${({ $outline }) =>
    !!$outline &&
    css`
      filter: ${`url(#${$outline}OutlineEffect)`};
    `};
`;

export const SpecialCharacter = styled('span')`
  font-family: '${Font.PkmnTCGSpecialCharacters}', monospace;
  line-height: 0;
`;
