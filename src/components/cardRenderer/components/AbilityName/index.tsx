import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import useCardStyles from 'src/features/cardEditor/cardStyles/useCardStyles';
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
