import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import BaseSetSelector from './fields/BaseSetSelector';
import RaritySelector from './fields/RaritySelector';
import SubtypeSelector from './fields/SubtypeSelector';
import SupertypeSelector from './fields/SupertypeSelector';
import TypeSelector from './fields/TypeSelector';
import VariationSelector from './fields/VariationSelector';

const CardTypeForm: FC = () => (
  <AccordionForm slug="cardImageForm" header="Card Type">
    <BaseSetSelector />
    <SupertypeSelector />
    <TypeSelector />
    <SubtypeSelector />
    <VariationSelector />
    <RaritySelector />
  </AccordionForm>
);

export default CardTypeForm;
