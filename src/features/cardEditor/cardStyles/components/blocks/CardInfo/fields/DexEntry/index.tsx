import { useCardLogic } from '@cardEditor/cardLogic';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import { FC } from 'react';
import { DexEntryText } from './styles';

const DexEntry: FC = () => {
  const { dexEntry } = useCardOptions();
  const { hasDexEntry } = useCardLogic();
  const { cardInfoOutline, cardInfoTextColor } = useCardStyles();

  if (!hasDexEntry || !dexEntry) return null;

  return (
    <DexEntryText color={cardInfoTextColor} outline={cardInfoOutline}>
      {dexEntry}
    </DexEntryText>
  );
};

export default DexEntry;
