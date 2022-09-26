import { useBaseSet } from '@cardEditor/cardOptions/baseSet';
import { useWeaknessType } from '@cardEditor/cardOptions/type';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import TypeImgWrapper from '../../atoms/TypeImgWrapper';

const WeaknessType: FC = () => {
  const { baseSet } = useBaseSet();
  const { weaknessType } = useWeaknessType();
  const imgSrc =
    !!weaknessType && Routes.Assets.Icons.Type(baseSet.slug, weaknessType.slug);

  if (!imgSrc) return null;

  return (
    <TypeImgWrapper>
      <DisplayImg src={imgSrc} />
    </TypeImgWrapper>
  );
};

export default WeaknessType;
