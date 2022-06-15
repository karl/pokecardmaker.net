import { Slider } from '@mui/material';
import { FC } from 'react';
import { StyledFormControlLabel } from './styles';
import { ControlledSliderProps } from './types';

const ControlledSlider: FC<ControlledSliderProps> = ({
  label,
  slug,
  ...props
}) => (
  <StyledFormControlLabel
    label={label}
    control={
      <Slider
        id={`${slug}-input`}
        aria-label={label}
        valueLabelDisplay="auto"
        size="small"
        {...props}
      />
    }
  />
);

export default ControlledSlider;
