import { Supertype } from '@cardEditor/cardOptions/supertype';

export const pokemon: Supertype = {
  id: 1,
  slug: 'pokemon',
  displayName: 'Pok\u00e9mon',
  logic: {
    hasHitpoints: true,
    hasMoves: true,
    hasTypeBar: true,
  },
  styles: {
    positions: {
      name: {
        top: '3.3%',
        left: '19%',
        width: '53%',
      },
    },
  },
};

export const trainer: Supertype = {
  id: 2,
  slug: 'trainer',
  displayName: 'Trainer',
  styles: {
    positions: {
      name: {
        top: '6.9%',
        left: '6.3%',
        width: '88%',
      },
    },
  },
};

export const energy: Supertype = {
  id: 3,
  slug: 'energy',
  displayName: 'Energy',
};

export const supertypes: Supertype[] = [pokemon, trainer, energy];
