import { useCardLogic } from '@cardEditor/cardLogic';
import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import RarityIconSelector from './fields/RarityIconSelector';
import RotationIconSelector from './fields/RotationIconSelector';
import SetIconSelector from './fields/SetIconSelector';

const CardInfoForm: FC = () => {
  const { hasCardInfo } = useCardLogic();

  if (!hasCardInfo) return null;

  return (
    <AccordionForm slug="cardInfoForm" header="Card Info">
      <SetIconSelector />
      <RotationIconSelector />
      <RarityIconSelector />
    </AccordionForm>
  );
};

export default CardInfoForm;
