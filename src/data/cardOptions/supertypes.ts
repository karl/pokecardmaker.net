import { Supertype } from '../../types/cardOptions/supertype';

export const pokemon: Supertype = {
  id: 1,
  slug: 'pokemon',
  displayName: 'Pok\u00e9mon',
};

export const trainer: Supertype = {
  id: 2,
  slug: 'trainer',
  displayName: 'Trainer',
};

export const energy: Supertype = {
  id: 3,
  slug: 'energy',
  displayName: 'Energy',
};

const supertypes: Supertype[] = [pokemon, trainer, energy];

export default supertypes;
