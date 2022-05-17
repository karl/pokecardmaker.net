import useBaseSet from '@hooks/cardOptions/useBaseSet';
import useRarity from '@hooks/cardOptions/useRarity';
import useSubtype from '@hooks/cardOptions/useSubtype';
import useSupertype from '@hooks/cardOptions/useSupertype';
import useType from '@hooks/cardOptions/useType';
import useVariation from '@hooks/cardOptions/useVariation';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useMemo } from 'react';

const CardImage: FC = () => {
  const { baseSet } = useBaseSet();
  const { supertype } = useSupertype();
  const { type } = useType();
  const { subtype } = useSubtype();
  const { rarity } = useRarity();
  const { variation } = useVariation();

  // TODO: base64
  const cardImageSrc = useMemo<string>(() => {
    let path = `${Routes.Assets.Cards}/baseSets/${baseSet.slug}/supertypes/${supertype.slug}/types/${type.slug}`;
    if (subtype) path += `/subtypes/${subtype.slug}`;
    if (variation) path += `/variations/${variation.slug}`;
    if (rarity) path += `/rarities/${rarity.slug}`;

    path += '.png';
    return path;
  }, [baseSet, supertype, type, subtype, variation, rarity]);

  return <Image src={cardImageSrc} layout="fill" />;
};

export default CardImage;
