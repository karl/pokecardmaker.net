import { TextColor } from '@cardEditor/cardStyles';
import { css, styled } from '@css';
import { Font } from '@utils/fonts';
import PlacementBlock from '../PlacementBlock';

export const Text = styled(PlacementBlock)<{
  $color: TextColor;
  $outline?: TextColor;
}>`
  position: relative;
  margin: 0;
  color: ${({ $color }) => {
    switch ($color) {
      case 'gx':
        return '#0065B5';
      case 'ultraBeast':
        return '#EF1018';
      case 'white':
      case 'black':
      default:
        return $color;
    }
  }};
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
