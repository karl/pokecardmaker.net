import { NameSymbol } from '@cardEditor/cardStyles';
import PlacementBlock from '@cardEditor/cardStyles/components/atoms/PlacementBlock';
import { css, styled } from '@css';

export const Wrapper = styled(PlacementBlock)<{ $symbol: NameSymbol }>`
  position: relative;

  ${({ $symbol }) => {
    switch ($symbol) {
      case 'v':
        return css`
          height: 3.25em;
          width: 4.5em;
        `;
      case 'vmax':
        return css`
          height: 3.25em;
          width: 6.6em;
        `;
      case 'vstar':
        return css`
          height: 4em;
          width: 7em;
        `;
      case 'star':
        return css`
          height: 3em;
          width: 5.5em;
        `;
      case 'ex':
        return css`
          height: 3em;
          width: 4.2em;
        `;
      case 'gx':
      case 'gxUltraBeast':
        return css`
          height: 3em;
          width: 6.8em;
          top: 4%;
        `;
      case 'prismStar':
        return css`
          height: 3em;
          width: 2.3em;
        `;
      default:
        return undefined;
    }
  }}
`;
