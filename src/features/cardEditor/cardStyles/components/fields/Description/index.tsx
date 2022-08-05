import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles';
import { FC } from 'react';
import { DescriptionText, Wrapper } from './styles';

const Description: FC = () => {
  const { hasDescription } = useCardLogic();
  const { description } = useCardOptions();
  const { movesOutline, movesTextColor } = useCardStyles();

  if (!hasDescription || !description) return null;

  return (
    <Wrapper>
      <DescriptionText outline={movesOutline} color={movesTextColor}>
        {description}
      </DescriptionText>
    </Wrapper>
  );
};

export default Description;
