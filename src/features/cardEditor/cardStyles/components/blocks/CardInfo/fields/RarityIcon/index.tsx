import { useRarityIcon } from '@cardEditor/cardOptions/rarityIcon';
import { useCardStyles } from '@cardEditor/cardStyles/hooks';
import useBase64Img from '@hooks/useBase64Img';
import Routes from '@routes';
import Image from 'next/image';
import { FC } from 'react';
import { Wrapper } from './styles';

const RarityIcon: FC = () => {
  const { rarityIcon } = useRarityIcon();
  const { rarityIconColor } = useCardStyles();
  const imgSrc = useBase64Img(
    rarityIcon &&
      (rarityIconColor === 'white'
        ? Routes.Assets.Icons.RarityWhite(rarityIcon.slug)
        : Routes.Assets.Icons.Rarity(rarityIcon.slug)),
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

export default RarityIcon;
