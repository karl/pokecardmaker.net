import { CardText } from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';

export const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.2em;
  font-family: 'Futura Std Heavy', monospace;
  margin-left: auto;
`;

export const MoveDamageAmountText = styled(CardText)`
  line-height: 1.1em;
  font-size: 2.2em;
`;

export const MoveDamageModifierText = styled(CardText)`
  line-height: 0.5em;
  margin-bottom: 0.165em;
  font-size: 2em;
`;
