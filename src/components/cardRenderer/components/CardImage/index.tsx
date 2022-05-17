import useBaseSet from '@hooks/cardOptions/useBaseSet';
import useRarity from '@hooks/cardOptions/useRarity';
import useSubtype from '@hooks/cardOptions/useSubtype';
import useSupertype from '@hooks/cardOptions/useSupertype';
import useType from '@hooks/cardOptions/useType';
import useVariation from '@hooks/cardOptions/useVariation';
import Routes from '@routes';
import Image from 'next/image';
import { FC, useEffect, useMemo, useState } from 'react';

const toDataURL = (url: string, callback: (b64: string) => void) => {
  const xhr = new XMLHttpRequest();
  xhr.onload = () => {
    const reader = new FileReader();
    reader.onloadend = () => {
      callback(reader.result as string);
    };
    reader.readAsDataURL(xhr.response);
  };
  xhr.open('GET', url);
  xhr.responseType = 'blob';
  xhr.send();
};

const CardImage: FC = () => {
  const { baseSet } = useBaseSet();
  const { supertype } = useSupertype();
  const { type } = useType();
  const { subtype } = useSubtype();
  const { rarity } = useRarity();
  const { variation } = useVariation();
  const [imgSrc, setImgSrc] = useState<string>();

  const imgPath = useMemo<string>(() => {
    let path = `${Routes.Assets.Cards}/baseSets/${baseSet.slug}/supertypes/${supertype.slug}/types/${type.slug}`;
    if (subtype) path += `/subtypes/${subtype.slug}`;
    if (variation) path += `/variations/${variation.slug}`;
    if (rarity) path += `/rarities/${rarity.slug}`;

    path += '.png';
    return path;
  }, [baseSet, supertype, type, subtype, variation, rarity]);

  useEffect(() => {
    setImgSrc(imgPath);
    toDataURL(imgPath, b64 => setImgSrc(b64));
  }, [imgPath]);

  if (!imgSrc) return null;
  return <Image src={imgSrc} layout="fill" />;
};

export default CardImage;
