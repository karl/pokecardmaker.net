import AccordionForm from '@components/AccordionForm';
import BonusMoveRadio from '@components/cardOptions/fields/BonusMoveRadio';
import useCardLogic from '@hooks/cardOptions/useCardLogic';
import { FC } from 'react';
import AbilityForm from '../AbilityForm';

const MovesForm: FC = () => {
  const { hasMoves } = useCardLogic();

  if (!hasMoves) return null;

  return (
    <AccordionForm id="movesForm" header="Moves">
      <BonusMoveRadio />
      <AbilityForm />
    </AccordionForm>
  );
};

export default MovesForm;
