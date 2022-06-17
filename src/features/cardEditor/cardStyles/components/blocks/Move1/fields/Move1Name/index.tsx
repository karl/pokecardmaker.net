import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { MoveNameText } from './styles';

const Move1Name: FC = () => {
  const { move1 } = useCardOptions();
  const { movesOutline, movesTextColor } = useCardStyles();

  return (
    <MoveNameText $outline={movesOutline} $color={movesTextColor}>
      {move1?.name}
    </MoveNameText>
  );
};

export default Move1Name;
