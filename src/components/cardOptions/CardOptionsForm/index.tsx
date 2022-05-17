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
import { BoxForm } from './styles';

const CardOptionsForm: FC = () => {
  return (
    <BoxForm as="form">
      <BaseSetSelector />
      <SupertypeSelector />
      <TypeSelector />
      <SubtypeSelector />
      <VariationSelector />
      <RaritySelector />
      <RotationIconSelector />
      <RarityIconSelector />
      <SetIconSelector />
    </BoxForm>
  );
};

export default CardOptionsForm;
