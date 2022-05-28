import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useCardStyles from '@hooks/cardOptions/useCardStyles';
import { FC } from 'react';
import { HPNumbers, HPText, Wrapper } from './styles';

const Hitpoints: FC = () => {
  const {
    state: { hitpoints },
  } = useCardOptions();
  const { cardStyles } = useCardStyles();

  if (!hitpoints) return null;

  return (
    <Wrapper
      $size={cardStyles.hpSize}
      $outline={cardStyles.hpOutline}
      $color={cardStyles.hpTextColor}
    >
      <HPText $size={cardStyles.hpSize}>HP</HPText>
      <HPNumbers $size={cardStyles.hpSize}>{hitpoints}</HPNumbers>
    </Wrapper>
  );
};

export default Hitpoints;
