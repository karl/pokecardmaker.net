import { FormControl, InputLabel } from '@mui/material';
import { FC } from 'react';
import { StyledSelect } from './styles';
import { ControlledSelectorProps } from './types';

const ControlledSelector: FC<ControlledSelectorProps> = ({
  displayName,
  slug,
  value,
  onChange,
  children,
  ...props
}) => (
  <FormControl fullWidth {...props}>
    <InputLabel id={`${slug}-label`} shrink>
      {displayName}
    </InputLabel>
    <StyledSelect
      labelId={`${slug}-label`}
      id={`${slug}-input`}
      value={value?.toString() ?? ''}
      label={displayName}
      // @ts-expect-error - Emotion bug
      onChange={onChange}
      displayEmpty
    >
      {children}
    </StyledSelect>
  </FormControl>
);

export default ControlledSelector;
