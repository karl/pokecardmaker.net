import CardDownloader from '@components/CardDownloader';
import { FC } from 'react';
import BasicsForm from '../blocks/BasicsForm';
import CardImageForm from '../blocks/CardImageForm';
import CardInfoForm from '../blocks/CardInfoForm';
import DebugForm from '../blocks/DebugForm';
import { Form } from './styles';

const CardOptionsForm: FC = () => {
  return (
    <Form as="form">
      <DebugForm />
      <CardDownloader />
      <CardImageForm />
      <BasicsForm />
      <CardInfoForm />
    </Form>
  );
};

export default CardOptionsForm;
