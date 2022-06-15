import DebugImage from '@components/cardRenderer/components/DebugImage';
import useCardDebug from 'src/features/cardEditor/debug/hooks/useCardDebug';
import { FC } from 'react';

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
