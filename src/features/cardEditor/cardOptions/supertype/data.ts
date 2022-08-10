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
      description: {
        top: '54%',
        left: '11.9%',
        height: '31.7%',
        width: '76%',
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
        top: '6.7%',
        left: '6.3%',
        width: '87.3%',
      },
      description: {
        top: '54%',
        left: '11.9%',
        height: '31.7%',
        width: '76%',
      },
    },
  },
};

export const energy: Supertype = {
  id: 3,
  slug: 'energy',
  displayName: 'Energy',
  styles: {
    positions: {
      name: {
        top: '6.7%',
        left: '6.3%',
        width: '62.5%',
      },
      description: {
        top: '66%',
        left: '8.9%',
        height: '25%',
        width: '83%',
      },
    },
  },
};

export const supertypes: Supertype[] = [pokemon, trainer, energy];
