import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useSubtype from '@hooks/cardOptions/useSubtype';
import { FC } from 'react';
import { StyledText } from './styles';

const PrevolveName: FC = () => {
  const {
    state: { prevolveName },
  } = useCardOptions();
  const { subtype } = useSubtype();

  if (!subtype?.logic.hasPrevolve || !prevolveName) return null;

  return <StyledText>Evolves from {prevolveName}</StyledText>;
};

export default PrevolveName;
