import { Supertype } from '@cardEditor/cardOptions/supertype/types';

export const pokemon: Supertype = {
  id: 1,
  slug: 'pokemon',
  displayName: 'Pok\u00e9mon',
  logic: {
    hasHitpoints: true,
    hasMoves: true,
  },
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

export const supertypes: Supertype[] = [pokemon, trainer, energy];
