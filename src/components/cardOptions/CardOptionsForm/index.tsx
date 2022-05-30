import CardDownloader from '@components/CardDownloader';
import { FC } from 'react';
import BasicsForm from '../blocks/BasicsForm';
import CardImageForm from '../blocks/CardImageForm';
import DebugForm from '../blocks/DebugForm';
import RarityIconSelector from '../fields/RarityIconSelector';
import RotationIconSelector from '../fields/RotationIconSelector';
import SetIconSelector from '../fields/SetIconSelector';
import { Form } from './styles';

const CardOptionsForm: FC = () => {
  return (
    <Form as="form">
      <DebugForm />
      <CardDownloader />
      <CardImageForm />
      <BasicsForm />
      <RotationIconSelector />
      <RarityIconSelector />
      <SetIconSelector />
    </Form>
  );
};

export default CardOptionsForm;
