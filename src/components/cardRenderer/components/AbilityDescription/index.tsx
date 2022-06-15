import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
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
