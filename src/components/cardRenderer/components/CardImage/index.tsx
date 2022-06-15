import Routes from '@routes';
import { FC, useMemo } from 'react';
import fallbackCard from '@assets/fallbackCard.png';
import useCardOptions from 'src/features/cardEditor/cardOptions/hooks/useCardOptions';
import dot from 'dot-object';
import { getCardPath } from '@utils/getCardPath';
import Image from 'next/image';
import useCardRelations from 'src/features/cardEditor/cardOptions/hooks/useCardRelations';
import { Wrapper } from './styles';

const CardImage: FC = () => {
  const { baseSet, supertype, type, subtype, variation, rarity } =
    useCardRelations();
  const { cardImgObj } = useCardOptions();

  const imgSrc = useMemo<string>(() => {
    const seperator = cardImgObj ? '.' : '/';
    const path = getCardPath(
      baseSet,
      supertype,
      type,
      subtype,
      variation,
      rarity,
      seperator,
    );
    if (cardImgObj) {
      const base64: string | undefined = dot.pick(`${path}.image`, cardImgObj);
      if (base64) return `data:image/png;base64,${base64}`;
      return fallbackCard.src;
    }
    return `${Routes.Assets.Cards}/${path}.png`;
  }, [cardImgObj, baseSet, supertype, type, subtype, variation, rarity]);

  if (!imgSrc) return null;
  return (
    <Wrapper>
      <Image
        src={imgSrc}
        alt=""
        layout="fill"
        placeholder="blur"
        blurDataURL={fallbackCard.src}
      />
    </Wrapper>
  );
};

export default CardImage;
