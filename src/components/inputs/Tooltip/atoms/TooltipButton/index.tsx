import { Info as InfoIcon } from '@mui/icons-material';
import { IconButton, IconButtonProps } from '@mui/material';
import { FC } from 'react';

const TooltipButton: FC<IconButtonProps> = props => (
  <IconButton size="small" sx={{ p: 0 }} {...props}>
    <InfoIcon fontSize="inherit" />
  </IconButton>
);

export default TooltipButton;
