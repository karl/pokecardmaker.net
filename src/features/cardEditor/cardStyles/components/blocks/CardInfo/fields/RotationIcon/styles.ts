import { RotationIconShape } from '@cardEditor/cardOptions/rotationIcon';
import { css, styled } from '@css';

export const Wrapper = styled('div')<{ $shape: RotationIconShape }>`
  position: relative;

  ${({ $shape }) => {
    switch ($shape) {
      case 'square':
        return css`
          margin-left: -0.4em;
          height: 1.6em;
          width: 1.6em;
        `;
      case 'rectangle':
        return css`
          height: 1.8em;
          width: 1.2em;
        `;
      default:
        return undefined;
    }
  }}
`;
