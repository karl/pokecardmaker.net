import AccordionForm from '@components/AccordionForm';
import BaseSetSelector from '@components/cardOptions/fields/BaseSetSelector';
import RaritySelector from '@components/cardOptions/fields/RaritySelector';
import SubtypeSelector from '@components/cardOptions/fields/SubtypeSelector';
import SupertypeSelector from '@components/cardOptions/fields/SupertypeSelector';
import TypeSelector from '@components/cardOptions/fields/TypeSelector';
import VariationSelector from '@components/cardOptions/fields/VariationSelector';
import { FC } from 'react';

const CardImageForm: FC = () => (
  <AccordionForm id="cardImageForm" header="Card Type">
    <BaseSetSelector />
    <SupertypeSelector />
    <TypeSelector />
    <SubtypeSelector />
    <VariationSelector />
    <RaritySelector />
  </AccordionForm>
);

export default CardImageForm;
