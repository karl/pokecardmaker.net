import ControlledSelector from '@components/ControlledSelector';
import useSupertype from '@hooks/cardOptions/useSupertype';
import useType from '@hooks/cardOptions/useType';
import { MenuItem, SelectChangeEvent } from '@mui/material';
import { FC } from 'react';

const TypeSelector: FC = () => {
  const { supertype } = useSupertype();
  const { types, type, setType } = useType();

  const handleChange = (event: SelectChangeEvent) => {
    setType(Number(event.target.value));
  };

  return (
    <ControlledSelector
      value={type.id}
      displayName="Type"
      slug="type"
      onChange={handleChange}
    >
      {types.map(
        t =>
          t.supertypes.includes(supertype.id) && (
            <MenuItem key={t.slug} value={t.id}>
              {t.displayName}
            </MenuItem>
          ),
      )}
    </ControlledSelector>
  );
};

export default TypeSelector;
