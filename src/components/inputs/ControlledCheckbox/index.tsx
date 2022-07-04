import { Checkbox } from '@mui/material';
import { FC } from 'react';
import Label from '../Label';
import { StyledFormControl } from './styles';
import { ControlledCheckboxProps } from './types';

const ControlledCheckbox: FC<ControlledCheckboxProps> = ({
  label,
  slug,
  value,
  onChange,
}) => (
  <StyledFormControl>
    <Label slug={slug}>{label}</Label>
    <Checkbox
      id={`${slug}-input`}
      checked={value}
      onChange={e => onChange(!!e.currentTarget.checked)}
      size="small"
    />
  </StyledFormControl>
);

export default ControlledCheckbox;
