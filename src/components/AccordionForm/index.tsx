import { Accordion, AccordionSummary, Typography } from '@mui/material';
import { FC } from 'react';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { StyledAccordion } from './styles';
import { AccordionFormProps } from './types';

const AccordionForm: FC<AccordionFormProps> = ({ slug, header, children }) => (
  <Accordion defaultExpanded disableGutters>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={`${slug}-content`}
      id={`${slug}-header`}
    >
      <Typography fontWeight={700}>{header}</Typography>
    </AccordionSummary>
    <StyledAccordion>{children}</StyledAccordion>
  </Accordion>
);

export default AccordionForm;
