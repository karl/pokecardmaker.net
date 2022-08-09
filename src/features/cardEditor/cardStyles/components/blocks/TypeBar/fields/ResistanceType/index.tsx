import useResistanceType from '@cardEditor/cardOptions/type/hooks/useResistanceType';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import TypeImgWrapper from '../../atoms/TypeImgWrapper';

const ResistanceType: FC = () => {
  const { resistanceType } = useResistanceType();
  const imgSrc =
    !!resistanceType && Routes.Assets.Icons.Type(resistanceType.slug);

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

export default ResistanceType;
