import useCardOptions from '@hooks/cardOptions/useCardOptions';
import useRarity from '@hooks/cardOptions/useRarity';
import useSubtype from '@hooks/cardOptions/useSubtype';
import useType from '@hooks/cardOptions/useType';
import { FC } from 'react';
import { NameText } from './styles';

const Name: FC = () => {
  const {
    state: { name },
  } = useCardOptions();
  // Should come from above hook
  const { type } = useType();
  const { subtype } = useSubtype();
  const { rarity } = useRarity();

  if (!name) return null;

  return (
    <NameText
      $outline={
        rarity?.styles.nameOutline ||
        subtype?.styles.nameOutline ||
        type.styles.nameOutline
      }
      $color={
        rarity?.styles.nameTextColor ||
        type?.styles.nameTextColor ||
        type.styles.nameTextColor
      }
    >
      {name}
    </NameText>
  );
};

export default Name;
