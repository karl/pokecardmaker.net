import TextInput from '@components/inputs/TextInput';
import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';

const TotalInSetInput: FC = () => {
  const { totalInSet, setTotalInSet } = useCardOptions();

  return (
    <TextInput
      slug="totalInSet"
      label="Total in Set"
      value={totalInSet}
      onChange={setTotalInSet}
    />
  );
};

export default TotalInSetInput;
