import AccordionForm from '@components/AccordionForm';
import RarityIconSelector from '@components/cardOptions/fields/RarityIconSelector';
import RotationIconSelector from '@components/cardOptions/fields/RotationIconSelector';
import SetIconSelector from '@components/cardOptions/fields/SetIconSelector';
import useCardStyles from '@hooks/cardOptions/useCardStyles';
import { FC } from 'react';

const CardInfoForm: FC = () => {
  const {
    cardStyles: { hasCardInfo },
  } = useCardStyles();

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
