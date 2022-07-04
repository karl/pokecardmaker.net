import { FormControl } from '@mui/material';
import Label from '../Label';
import { StyledRadioGroup } from './styles';
import { ControlledRadioGroupProps } from './types';

const ControlledRadioGroup = <T = string,>({
  label,
  slug,
  value,
  onChange,
  children,
}: ControlledRadioGroupProps<T>) => (
  <FormControl>
    <Label slug={slug}>{label}</Label>
    <StyledRadioGroup
      id={`${slug}-input`}
      name={`${slug}-input`}
      aria-labelledby={`${slug}-label`}
      value={value}
      onChange={e => onChange(e.currentTarget.value as unknown as T)}
    >
      {children}
    </StyledRadioGroup>
  </FormControl>
);

export default ControlledRadioGroup;
