import { FC } from 'react';
import BaseSetSelector from '../fields/BaseSetSelector';
import RarityIconSelector from '../fields/RarityIconSelector';
import RaritySelector from '../fields/RaritySelector';
import RotationIconSelector from '../fields/RotationIconSelector';
import SetIconSelector from '../fields/SetIconSelector';
import SubtypeSelector from '../fields/SubtypeSelector';
import SupertypeSelector from '../fields/SupertypeSelector';
import TypeSelector from '../fields/TypeSelector';
import VariationSelector from '../fields/VariationSelector';

const CardOptionsForm: FC = () => {
  return (
    <>
      <BaseSetSelector />
      <SupertypeSelector />
      <TypeSelector />
      <SubtypeSelector />
      <VariationSelector />
      <RaritySelector />
      <RotationIconSelector />
      <RarityIconSelector />
      <SetIconSelector />
    </>
  );
};

export default CardOptionsForm;
