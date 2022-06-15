import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import useCardStyles from 'src/features/cardEditor/cardStyles/useCardStyles';
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
