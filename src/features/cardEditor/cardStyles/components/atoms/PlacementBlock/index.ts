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
      'order',
      'gap',
      'font-size',
      'margin-left',
      'align-items',
      'text-align',
      'min-width',
      'letter-spacing',
    ].includes(propName.toString()),
})<Placement>`
  position: absolute;

  ${({ top, right, bottom, left, height, width, order, gap, ...rest }) => {
    const lineHeight = rest['line-height'];
    const fontSize = rest['font-size'];
    const marginLeft = rest['margin-left'];
    const alignItems = rest['align-items'];
    const textAlign = rest['text-align'];
    const minWidth = rest['min-width'];
    const letterSpacing = rest['letter-spacing'];

    return Object.entries({
      top,
      right,
      bottom,
      left,
      height,
      width,
      order,
      gap,
      'line-height': lineHeight,
      'font-size': fontSize,
      'margin-left': marginLeft,
      'align-items': alignItems,
      'text-align': textAlign,
      'min-width': minWidth,
      'letter-spacing': letterSpacing,
    })
      .map(([key, value]) => value && `${key}: ${value} !important;`)
      .filter(isPresent);
  }}
`;
