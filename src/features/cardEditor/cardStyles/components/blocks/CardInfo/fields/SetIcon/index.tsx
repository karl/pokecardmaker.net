import { useSetIcon } from '@cardEditor/cardOptions/setIcon';
import { useCardStyles } from '@cardEditor/cardStyles';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import { Wrapper } from './styles';

const SetIcon: FC = () => {
  const {
    positions: { setIcon: placement },
  } = useCardStyles();
  const { setIcon, customSetIconSrc } = useSetIcon();
  const imgSrc =
    customSetIconSrc || (!!setIcon && Routes.Assets.Icons.Set(setIcon.slug));

  if (!imgSrc) return null;

  return (
    <Wrapper placement={placement}>
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default SetIcon;
