import { useSetIcon } from '@cardEditor/cardOptions/setIcon';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import Routes from '@routes';
import { FC } from 'react';
import { Wrapper } from './styles';

const SetIcon: FC = () => {
  const { setIcon, customSetIconSrc } = useSetIcon();
  const imgSrc =
    customSetIconSrc || (!!setIcon && Routes.Assets.Icons.Set(setIcon.slug));

  if (!imgSrc) return null;

  return (
    <Wrapper>
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default SetIcon;
