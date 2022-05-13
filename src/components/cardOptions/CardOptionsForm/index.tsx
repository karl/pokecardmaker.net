import { FC } from 'react';
import RaritySelector from '../fields/RaritySelector';
import SubtypeSelector from '../fields/SubtypeSelector';
import SupertypeSelector from '../fields/SupertypeSelector';
import TypeSelector from '../fields/TypeSelector';
import VariationSelector from '../fields/VariationSelector';

const CardOptionsForm: FC = () => {
  return (
    <>
      <SupertypeSelector />
      <TypeSelector />
      <SubtypeSelector />
      <VariationSelector />
      <RaritySelector />
    </>
  );
};

export default CardOptionsForm;
