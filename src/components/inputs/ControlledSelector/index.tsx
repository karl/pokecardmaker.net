import { FormControl, FormHelperText } from '@mui/material';
import { FC } from 'react';
import Label from '../Label';
import { StyledSelect } from './styles';
import { ControlledSelectorProps } from './types';

const ControlledSelector: FC<ControlledSelectorProps> = ({
  displayName,
  slug,
  value,
  gap = 2,
  helpText,
  onChange,
  children,
  ...props
}) => (
  <FormControl fullWidth {...props}>
    <Label slug={slug}>{displayName}</Label>
    <StyledSelect
      labelId={`${slug}-label`}
      id={`${slug}-input`}
      value={value?.toString() ?? ''}
      // @ts-expect-error - Emotion bug
      onChange={onChange}
      displayEmpty
      $gap={gap}
    >
      {children}
    </StyledSelect>
    {helpText && <FormHelperText>{helpText}</FormHelperText>}
  </FormControl>
);

export default ControlledSelector;
