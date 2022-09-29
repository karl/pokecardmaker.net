import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';
import { Font } from '@utils/fonts';

export const Wrapper = styled('div')`
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.2em;
  font-family: '${Font.FuturaStdHeavy}', monospace;
  margin-left: auto;
`;

export const MoveDamageAmountText = styled(CardText)`
  line-height: 1.1em;
  font-size: 2.2em;
`;

export const MoveDamageModifierText = styled(CardText)`
  position: absolute;
  font-size: 2em;
  top: 38%;
  right: -0.9em;
  transform: translate(-50%, -50%);
`;
