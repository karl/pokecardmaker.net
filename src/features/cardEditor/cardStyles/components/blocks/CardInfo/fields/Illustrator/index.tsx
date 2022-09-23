import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { IllustratorText } from './styles';

const Illustrator: FC = () => {
  const { illustrator } = useCardOptions();
  const { hasIllustratorName } = useCardLogic();
  const {
    cardInfoOutline,
    cardInfoTextColor,
    positions: { illustrator: placement },
  } = useCardStyles();

  if (!hasIllustratorName || !illustrator) return null;

  return (
    <IllustratorText
      color={cardInfoTextColor}
      outline={cardInfoOutline}
      {...placement}
    >
      Illus. {illustrator}
    </IllustratorText>
  );
};

export default Illustrator;
