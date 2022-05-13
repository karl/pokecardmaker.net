import { FormControl, InputLabel, Select } from '@mui/material';
import { FC } from 'react';
import { ControlledSelectorProps } from './types';

const ControlledSelector: FC<ControlledSelectorProps> = ({
  displayName,
  slug,
  value,
  onChange,
  children,
}) => {
  return (
    <FormControl fullWidth>
      <InputLabel id={`${slug}-label`} shrink>
        {displayName}
      </InputLabel>
      <Select
        labelId={`${slug}-label`}
        id={slug}
        value={value?.toString() ?? ''}
        label={displayName}
        onChange={onChange}
        displayEmpty
      >
        {children}
      </Select>
    </FormControl>
  );
};

export default ControlledSelector;
