import { useRarityIcon } from '@cardEditor/cardOptions/rarityIcon';
import DisplayImg from '@cardEditor/cardStyles/components/atoms/DisplayImg';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import Routes from '@routes';
import { FC } from 'react';
import { Wrapper } from './styles';

const RarityIcon: FC = () => {
  const { rarityIcon } = useRarityIcon();
  const { rarityIconColor } = useCardStyles();
  const imgSrc =
    !!rarityIcon &&
    (rarityIconColor === 'white'
      ? Routes.Assets.Icons.RarityWhite(rarityIcon.slug)
      : Routes.Assets.Icons.Rarity(rarityIcon.slug));

  if (!imgSrc) return null;

  return (
    <Wrapper>
      <DisplayImg src={imgSrc} />
    </Wrapper>
  );
};

export default RarityIcon;
