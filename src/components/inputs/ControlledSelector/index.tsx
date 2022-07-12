import { FormControl } from '@mui/material';
import { FC } from 'react';
import Label from '../Label';
import { StyledSelect } from './styles';
import { ControlledSelectorProps } from './types';

const ControlledSelector: FC<ControlledSelectorProps> = ({
  displayName,
  slug,
  value,
  noGap = false,
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
      $noGap={noGap}
    >
      {children}
    </StyledSelect>
  </FormControl>
);

export default ControlledSelector;
