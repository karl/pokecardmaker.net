import useWeaknessType from '@cardEditor/cardOptions/type/hooks/useWeaknessType';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import TypeImgWrapper from '../../atoms/TypeImgWrapper';

const WeaknessType: FC = () => {
  const { weaknessType } = useWeaknessType();
  const imgSrc = !!weaknessType && Routes.Assets.Icons.Type(weaknessType.slug);

  if (!imgSrc) return null;

  return (
    <TypeImgWrapper>
      <Image
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        alt=""
        src={imgSrc}
      />
    </TypeImgWrapper>
  );
};

export default WeaknessType;
