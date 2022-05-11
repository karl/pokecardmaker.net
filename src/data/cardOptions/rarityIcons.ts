import { RarityIcon } from '../../types/cardOptions/rarityIcon';

export const common: RarityIcon = {
  id: 1,
  slug: 'common',
  displayName: 'Common',
  imgSrc: '',
};

export const uncommon: RarityIcon = {
  id: 2,
  slug: 'uncommon',
  displayName: 'Uncommon',
  imgSrc: '',
};

export const rare: RarityIcon = {
  id: 3,
  slug: 'rare',
  displayName: 'Rare',
  imgSrc: '',
};

const rarityIcons: RarityIcon[] = [common, uncommon, rare];

export default rarityIcons;
