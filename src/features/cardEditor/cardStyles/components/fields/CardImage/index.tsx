import { FC } from 'react';
import { useCardStyles } from '@cardEditor/cardStyles';
import { Wrapper } from './styles';
import DisplayImg from '../../atoms/DisplayImg';

const CardImage: FC = () => {
  const { cardImgSrc } = useCardStyles();

  if (!cardImgSrc) return null;

  return (
    <Wrapper>
      <DisplayImg src={cardImgSrc} />
    </Wrapper>
  );
};

export default CardImage;
