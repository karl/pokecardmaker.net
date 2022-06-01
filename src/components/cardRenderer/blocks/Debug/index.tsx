import DebugImage from '@components/cardRenderer/components/DebugImage';
import { FC } from 'react';

const Debug: FC = () => {
  if (process.env.NODE_ENV !== 'development') return null;

  return (
    <>
      <DebugImage />
    </>
  );
};

export default Debug;
