import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { DescriptionText } from './styles';

const Description: FC = () => {
  const { hasDescription } = useCardLogic();
  const { description } = useCardOptions();
  const { movesOutline, movesTextColor } = useCardStyles();

  if (!hasDescription || !description) return null;

  return (
    <DescriptionText $outline={movesOutline} $color={movesTextColor}>
      {description}
    </DescriptionText>
  );
};

export default Description;
