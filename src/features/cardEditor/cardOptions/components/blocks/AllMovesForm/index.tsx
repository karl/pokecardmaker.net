import { useCardLogic } from '@cardEditor/cardLogic';
import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import AbilityForm from '../AbilityForm';
import Move1Form from '../Move1Form';
import Move2Form from '../Move2Form';
import Move3Form from '../Move3Form';
import BonusMoveRadio from './fields/BonusMoveRadio';

const AllMovesForm: FC = () => {
  const { hasMoves } = useCardLogic();

  if (!hasMoves) return null;

  return (
    <AccordionForm slug="movesForm" header="Moves">
      <Move1Form />
      <BonusMoveRadio />
      <AbilityForm />
      <Move2Form />
      <Move3Form />
    </AccordionForm>
  );
};

export default AllMovesForm;
