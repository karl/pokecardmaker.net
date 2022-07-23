import { FC } from 'react';
import { useCardOptions } from '@cardEditor/cardOptions';
import { StyledCroppedImg, Wrapper } from './styles';

const BackgroundImg: FC = () => {
  const { backgroundImg } = useCardOptions();

  if (!backgroundImg) return null;

  return (
    <Wrapper>
      <StyledCroppedImg {...backgroundImg} />
    </Wrapper>
  );
};

export default BackgroundImg;
