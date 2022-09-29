import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const MoveNameText = styled(CardText)<{ $energyCost: number }>`
  font-family: '${Font.GillSansStdBoldCondensed}', monospace;
  font-size: 2.625em;
  letter-spacing: -0.055em;
  line-height: 0.95em;
  position: absolute;
  left: ${({ $energyCost }) => `${Math.max(4, $energyCost) * 7.5}%`};
`;
