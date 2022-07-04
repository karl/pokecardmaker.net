import { FormControl, Slider } from '@mui/material';
import { FC } from 'react';
import Label from '../Label';
import { Wrapper } from './styles';
import { ControlledSliderProps } from './types';

const ControlledSlider: FC<ControlledSliderProps> = ({
  label,
  slug,
  value,
  step = 1,
  min = 0,
  max = 100,
  onChange,
  onChangeCommitted,
}) => (
  <FormControl>
    <Label slug={slug}>{label}</Label>
    <Wrapper>
      <Slider
        id={`${slug}-input`}
        aria-label={label}
        valueLabelDisplay="auto"
        size="small"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(_, newValue) => onChange(newValue as number)}
        onChangeCommitted={(_, newValue) =>
          onChangeCommitted(newValue as number)
        }
      />
    </Wrapper>
  </FormControl>
);

export default ControlledSlider;
