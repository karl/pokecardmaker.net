import CardText from '@cardEditor/cardStyles/components/atoms/CardText';
import { styled } from '@css';

export const Wrapper = styled(CardText)`
  display: flex;
  align-items: center;
  position: relative;
  gap: 0.2em;
`;

export const WeaknessText = styled('span')`
  font-size: 1.84em;
  line-height: 1.1em;
`;

export const ModifierText = styled('span')`
  line-height: 0.5em;
  font-size: 1.5em;
  margin-bottom: 0.165em;
`;
