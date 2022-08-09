import useWeaknessType from '@cardEditor/cardOptions/type/hooks/useWeaknessType';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import TypeImgWrapper from '../../atoms/TypeImgWrapper';

const WeaknessType: FC = () => {
  const { weaknessType } = useWeaknessType();
  const imgSrc = !!weaknessType && Routes.Assets.Icons.Type(weaknessType.slug);

  if (!imgSrc) return null;

  return (
    <TypeImgWrapper>
      <DisplayImg src={imgSrc} />
    </TypeImgWrapper>
  );
};

export default WeaknessType;
