import { useCardLogic } from '@cardEditor/cardLogic';
import AccordionForm from '@components/AccordionForm';
import { Box } from '@mui/system';
import { FC } from 'react';
import CardNumberInput from './fields/CardNumberInput';
import DexEntryInput from './fields/DexEntryInput';
import IllustratorInput from './fields/IllustratorInput';
import RarityIconSelector from './fields/RarityIconSelector';
import RotationIconSelector from './fields/RotationIconSelector';
import SetIconSelector from './fields/SetIconSelector';
import TotalInSetInput from './fields/TotalInSetInput';

const CardInfoForm: FC = () => {
  const { hasCardInfo } = useCardLogic();

  if (!hasCardInfo) return null;

  return (
    <AccordionForm slug="cardInfoForm" header="Card Info">
      <IllustratorInput />
      <SetIconSelector />
      <RotationIconSelector />
      <Box
        gap={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ '> *': { flexGrow: 1 } }}
      >
        <CardNumberInput />
        {/* Height of input label */}
        <Box mt="25px" flexGrow={0}>
          /
        </Box>
        <TotalInSetInput />
      </Box>
      <RarityIconSelector />
      <DexEntryInput />
    </AccordionForm>
  );
};

export default CardInfoForm;
