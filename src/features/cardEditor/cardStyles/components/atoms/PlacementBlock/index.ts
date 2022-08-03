import { styled } from '@css';
import { Placement } from '@cardEditor/cardStyles';
import { isPresent } from '@utils/isPresent';

export const PlacementBlock = styled('div', {
  // Don't put the Placement properties in the dom
  shouldForwardProp: propName =>
    !['top', 'right', 'bottom', 'left', 'height', 'width'].includes(
      propName.toString(),
    ),
})<Placement>`
  position: absolute;

  ${({ top, right, bottom, left, height, width }) =>
    Object.entries({ top, right, bottom, left, height, width })
      .map(([key, value]) => value && `${key}: ${value};`)
      .filter(isPresent)}
`;
