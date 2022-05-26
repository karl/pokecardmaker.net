import { styled } from '@css';
import { AccordionDetails } from '@mui/material';

export const StyledAccordion = styled(AccordionDetails)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(4)};
`;
