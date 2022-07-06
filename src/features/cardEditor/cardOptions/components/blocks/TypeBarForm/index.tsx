import { useCardLogic } from '@cardEditor/cardLogic';
import AccordionForm from '@components/AccordionForm';
import { FC } from 'react';
import ResistanceAmountInput from './fields/ResistanceAmountInput';
import ResistanceTypeSelector from './fields/ResistanceTypeSelector';
import WeaknessAmountInput from './fields/WeaknessAmountInput';
import WeaknessTypeSelector from './fields/WeaknessTypeSelector';

const TypeBarForm: FC = () => {
  const { hasTypeBar } = useCardLogic();

  if (!hasTypeBar) return null;

  return (
    <AccordionForm slug="typeBarForm" header="Type Bar">
      <WeaknessTypeSelector />
      <WeaknessAmountInput />
      <ResistanceTypeSelector />
      <ResistanceAmountInput />
    </AccordionForm>
  );
};

export default TypeBarForm;
