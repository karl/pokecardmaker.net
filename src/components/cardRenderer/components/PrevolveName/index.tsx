import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { FC } from 'react';
import { StyledText } from './styles';

const PrevolveName: FC = () => {
  const { prevolveName } = useCardOptions();
  const { hasPrevolve } = useCardLogic();

  if (!hasPrevolve || !prevolveName) return null;

  return <StyledText>Evolves from {prevolveName}</StyledText>;
};

export default PrevolveName;
