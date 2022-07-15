import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { useCardLogic } from '@cardEditor/cardLogic';
import TextAreaInput from '@components/inputs/TextAreaInput';

const DexEntryInput: FC = () => {
  const { hasDexEntry } = useCardLogic();
  const { dexEntry, setDexEntry } = useCardOptions();

  if (!hasDexEntry) return null;

  return (
    <TextAreaInput
      slug="dexEntry"
      label="Pokédex Entry"
      value={dexEntry}
      onChange={setDexEntry}
    />
  );
};

export default DexEntryInput;
