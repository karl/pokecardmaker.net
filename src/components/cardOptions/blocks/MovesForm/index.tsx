import AccordionForm from '@components/AccordionForm';
import BonusMoveRadio from '@components/cardOptions/fields/BonusMoveRadio';
import useCardLogic from '@hooks/cardOptions/useCardLogic';
import { FC } from 'react';
import AbilityForm from '../AbilityForm';
import Move1Form from '../Move1Form';
import Move2Form from '../Move2Form';

const MovesForm: FC = () => {
  const { hasMoves } = useCardLogic();

  if (!hasMoves) return null;

  return (
    <AccordionForm id="movesForm" header="Moves">
      <Move1Form />
      <BonusMoveRadio />
      <AbilityForm />
      <Move2Form />
    </AccordionForm>
  );
};

export default MovesForm;
