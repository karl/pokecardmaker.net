import { useCardLogic } from '@cardEditor/cardLogic';
import { useRotationIcon } from '@cardEditor/cardOptions/rotationIcon';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import { Wrapper } from './styles';

const RotationIcon: FC = () => {
  const { hasRotationIcon } = useCardLogic();
  const { rotationIcon } = useRotationIcon();
  const imgSrc =
    !!rotationIcon && Routes.Assets.Icons.Rotation(rotationIcon.slug);

  if (!imgSrc || !hasRotationIcon) return null;

  return (
    <Wrapper $shape={rotationIcon.shape}>
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default RotationIcon;
