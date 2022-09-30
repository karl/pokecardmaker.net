import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { DexEntryText } from './styles';

const DexEntry: FC = () => {
  const { dexEntry } = useCardOptions();
  const { hasDexEntry } = useCardLogic();
  const {
    cardInfoOutline,
    cardInfoTextColor,
    positions: { dexEntry: placement },
  } = useCardStyles();

  if (!hasDexEntry || !dexEntry) return null;

  return (
    <DexEntryText
      textColor={cardInfoTextColor}
      textOutline={cardInfoOutline}
      placement={placement}
    >
      {dexEntry}
    </DexEntryText>
  );
};

export default DexEntry;
