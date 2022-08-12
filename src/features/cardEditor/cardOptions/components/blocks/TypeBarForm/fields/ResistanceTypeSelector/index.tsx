import { useResistanceType } from '@cardEditor/cardOptions/type';
import { FC } from 'react';
import TypeBarTypeSelector from '../../components/TypeBarTypeSelector';

const ResistanceTypeSelector: FC = () => {
  const { resistanceType, setResistanceType } = useResistanceType();

  return (
    <TypeBarTypeSelector
      slug="resistanceType"
      displayName="Resistance Type"
      type={resistanceType}
      setType={setResistanceType}
    />
  );
};

export default ResistanceTypeSelector;
