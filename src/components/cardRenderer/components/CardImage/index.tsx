import { FC } from 'react';
import fallbackCard from '@assets/fallbackCard.png';
import Image from 'next/image';
import { useCardStyles } from '@cardEditor/cardStyles';
import { Wrapper } from './styles';

const CardImage: FC = () => {
  const { cardImgSrc } = useCardStyles();

  if (!cardImgSrc) return null;

  return (
    <Wrapper>
      <Image
        src={cardImgSrc}
        alt=""
        layout="fill"
        placeholder="blur"
        blurDataURL={fallbackCard.src}
      />
    </Wrapper>
  );
};

export default CardImage;
