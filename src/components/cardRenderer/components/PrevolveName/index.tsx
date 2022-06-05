import useCardLogic from '@hooks/cardOptions/useCardLogic';
import useCardOptions from '@hooks/cardOptions/useCardOptions';
import { FC } from 'react';
import { StyledText } from './styles';

const PrevolveName: FC = () => {
  const { prevolveName } = useCardOptions();
  const { hasPrevolve } = useCardLogic();

  if (!hasPrevolve || !prevolveName) return null;

  return <StyledText>Evolves from {prevolveName}</StyledText>;
};

export default PrevolveName;
