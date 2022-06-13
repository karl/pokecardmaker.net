import { Slider } from '@mui/material';
import { FC } from 'react';
import { StyledFormControlLabel } from './styles';
import { ControlledSliderProps } from './types';

const ControlledSlider: FC<ControlledSliderProps> = ({ label, ...props }) => (
  <StyledFormControlLabel
    label={label}
    control={
      <Slider
        aria-label={label}
        valueLabelDisplay="auto"
        size="small"
        {...props}
      />
    }
  />
);

export default ControlledSlider;
