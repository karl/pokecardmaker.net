import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useCardStyles from '@hooks/cardOptions/useCardStyles';
import { FC } from 'react';
import { AbilityDescriptionText } from './styles';

const AbilityDescription: FC = () => {
  const { ability } = useCardOptions();
  const { movesOutline, movesTextColor } = useCardStyles();

  return (
    <AbilityDescriptionText $outline={movesOutline} $color={movesTextColor}>
      {ability?.description}
    </AbilityDescriptionText>
  );
};

export default AbilityDescription;
