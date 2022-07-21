import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { StyledCroppedImg, Wrapper } from './styles';

const ImgLayer1: FC = () => {
  const { imgLayer1 } = useCardOptions();

  if (!imgLayer1) return null;

  return (
    <Wrapper>
      <StyledCroppedImg {...imgLayer1} />
    </Wrapper>
  );
};

export default ImgLayer1;
