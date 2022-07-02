import { CardText } from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';

export const MoveNameText = styled(CardText)<{ $energyCost: number }>`
  font-family: 'Gill Sans Std Bold Condensed', monospace;
  font-size: 2.625em;
  letter-spacing: -0.055em;
  line-height: 0.85em;
  position: absolute;
  left: ${({ $energyCost }) => `${Math.max(4, $energyCost) * 7.5}%`};
`;
