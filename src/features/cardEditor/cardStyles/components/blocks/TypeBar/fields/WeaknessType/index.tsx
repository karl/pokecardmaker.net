import useWeaknessType from '@cardEditor/cardOptions/type/hooks/useWeaknessType';
import useBase64Img from '@hooks/useBase64Img';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';

const WeaknessType: FC = () => {
  const { weaknessType } = useWeaknessType();
  const imgSrc = useBase64Img(
    weaknessType && Routes.Assets.Icons.Type(weaknessType.slug),
  );

  if (!imgSrc) return null;

  return (
    <Wrapper>
      <Image
        layout="fill"
        objectFit="contain"
        objectPosition="left"
        alt=""
        src={imgSrc}
      />
    </Wrapper>
  );
};

export default WeaknessType;
