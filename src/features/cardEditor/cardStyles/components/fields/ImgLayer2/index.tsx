import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { StyledCroppedImg, Wrapper } from './styles';

const ImgLayer2: FC = () => {
  const { imgLayer2 } = useCardOptions();

  if (!imgLayer2) return null;

  return (
    <Wrapper>
      <StyledCroppedImg {...imgLayer2} />
    </Wrapper>
  );
};

export default ImgLayer2;
