import { Box } from '@mui/system';
import { FC, useMemo } from 'react';
import { PlacementBlockProps } from './types';

const PlacementBlock: FC<PlacementBlockProps> = ({
  placement,
  position = 'absolute',
  children,
  ...props
}) => {
  const sx = useMemo(
    () =>
      placement
        ? Object.entries(placement).reduce(
            (obj, [key, value]) =>
              Object.assign(obj, { [key]: `${value}!important` }),
            {},
          )
        : undefined,
    [placement],
  );

  return (
    <Box
      sx={{
        position,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default PlacementBlock;
