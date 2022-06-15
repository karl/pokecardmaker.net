import { useCardDebug } from '@cardEditor/cardDebug';
import { FC } from 'react';
import DebugImage from './fields/DebugImage';

const Debug: FC = () => {
  const { showDebug } = useCardDebug();

  if (!showDebug) return null;

  return (
    <>
      <DebugImage />
    </>
  );
};

export default Debug;
