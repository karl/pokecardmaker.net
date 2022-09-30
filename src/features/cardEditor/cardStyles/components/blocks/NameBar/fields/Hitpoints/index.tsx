import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { HPNumbers, HPText, Wrapper } from './styles';

const Hitpoints: FC = () => {
  const { hasHitpoints } = useCardLogic();
  const { hitpoints } = useCardOptions();
  const {
    hpSize,
    hpOutline,
    hpTextColor,
    positions: { hitpoints: placement },
  } = useCardStyles();

  if (!hasHitpoints || hitpoints === '') return null;

  return (
    <Wrapper
      $size={hpSize}
      textOutline={hpOutline}
      textColor={hpTextColor}
      placement={placement}
    >
      <HPText $size={hpSize}>HP</HPText>
      <HPNumbers $size={hpSize}>{hitpoints}</HPNumbers>
    </Wrapper>
  );
};

export default Hitpoints;
