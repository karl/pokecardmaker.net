import { styled } from '@css';
import { Placement } from '@cardEditor/cardStyles';
import { isPresent } from '@utils/isPresent';

// TODO: Allow all CSSProperties
export const PlacementBlock = styled('div', {
  // Don't put the Placement properties in the dom
  shouldForwardProp: propName =>
    ![
      'top',
      'right',
      'bottom',
      'left',
      'height',
      'width',
      'line-height',
    ].includes(propName.toString()),
})<Placement>`
  position: absolute;

  ${({ top, right, bottom, left, height, width, ...rest }) => {
    const lineHeight = rest['line-height'];

    return Object.entries({
      top,
      right,
      bottom,
      left,
      height,
      width,
      'line-height': lineHeight,
    })
      .map(([key, value]) => value && `${key}: ${value} !important;`)
      .filter(isPresent);
  }}
`;
