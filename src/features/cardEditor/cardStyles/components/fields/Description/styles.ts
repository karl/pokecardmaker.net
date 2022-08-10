import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';
import { PlacementBlock } from '../../atoms/PlacementBlock';

export const Wrapper = styled(PlacementBlock)`
  display: flex;
  align-items: center;
`;

export const DescriptionText = styled(CardText)`
  font-family: '${Font.GillSansStdRegular}', monospace;
  font-size: 1.635em;
  letter-spacing: 0.002em;
  white-space: pre-line;
  line-height: 1.35em;
`;
