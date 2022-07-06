import { FC } from 'react';
import useWeaknessType from '@cardEditor/cardOptions/type/hooks/useWeaknessType';
import TypeBarTypeSelector from '../../components/TypeBarTypeSelector';

const WeaknessTypeSelector: FC = () => {
  const { weaknessType, setWeaknessType } = useWeaknessType();

  return (
    <TypeBarTypeSelector
      slug="weaknessType"
      displayName="Weakness Type"
      type={weaknessType}
      setType={setWeaknessType}
    />
  );
};

export default WeaknessTypeSelector;
