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
    ].includes(propName.toString()),
})<Placement>`
  position: absolute;

  ${({ top, right, bottom, left, height, width, order, gap, ...rest }) => {
    const lineHeight = rest['line-height'];
    const fontSize = rest['font-size'];
    const marginLeft = rest['margin-left'];
    const alignItems = rest['align-items'];

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
    })
      .map(([key, value]) => value && `${key}: ${value} !important;`)
      .filter(isPresent);
  }}
`;
