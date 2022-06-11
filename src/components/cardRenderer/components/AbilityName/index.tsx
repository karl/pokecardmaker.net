import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useCardStyles from '@hooks/cardOptions/useCardStyles';
import { FC } from 'react';
import { AbilityNameText } from './styles';

const AbilityName: FC = () => {
  const { ability } = useCardOptions();
  const { movesOutline } = useCardStyles();

  return (
    <AbilityNameText $outline={movesOutline}>{ability?.name}</AbilityNameText>
  );
};

export default AbilityName;
