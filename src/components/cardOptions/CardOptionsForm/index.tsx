import CardDownloader from '@components/CardDownloader';
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
import { Form } from './styles';

const CardOptionsForm: FC = () => {
  return (
    <Form as="form">
      <CardDownloader />
      <BaseSetSelector />
      <SupertypeSelector />
      <TypeSelector />
      <SubtypeSelector />
      <VariationSelector />
      <RaritySelector />
      <RotationIconSelector />
      <RarityIconSelector />
      <SetIconSelector />
    </Form>
  );
};

export default CardOptionsForm;
