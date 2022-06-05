import { defaultSupertypeLogic } from '@defaults/supertypes';
import { Supertype } from '@interfaces/cardOptions/supertype';

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
  logic: defaultSupertypeLogic,
};

export const energy: Supertype = {
  id: 3,
  slug: 'energy',
  displayName: 'Energy',
  logic: defaultSupertypeLogic,
};

const supertypes: Supertype[] = [pokemon, trainer, energy];

export default supertypes;
