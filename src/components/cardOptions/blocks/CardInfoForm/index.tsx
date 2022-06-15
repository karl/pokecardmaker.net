import AccordionForm from '@components/AccordionForm';
import RarityIconSelector from '@components/cardOptions/fields/RarityIconSelector';
import RotationIconSelector from '@components/cardOptions/fields/RotationIconSelector';
import SetIconSelector from '@components/cardOptions/fields/SetIconSelector';
import useCardLogic from 'src/features/cardEditor/cardLogic/useCardLogic';
import { FC } from 'react';

const CardInfoForm: FC = () => {
  const { hasCardInfo } = useCardLogic();

  if (!hasCardInfo) return null;

  return (
    <AccordionForm id="cardInfoForm" header="Card Info">
      <SetIconSelector />
      <RotationIconSelector />
      <RarityIconSelector />
    </AccordionForm>
  );
};

export default CardInfoForm;
