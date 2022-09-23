import { Supertype } from '@cardEditor/cardOptions/supertype';
import { sunAndMoon } from '../baseSet';

export const pokemon: Supertype = {
  id: 1,
  slug: 'pokemon',
  displayName: 'Pok\u00e9mon',
  logic: {
    hasHitpoints: true,
    hasMoves: true,
    hasTypeBar: true,
    hasSubname: true,
  },
  styles: {
    hasSubnameBeforeName: true,
    positions: {
      name: {
        top: '3.3%',
        left: '19%',
        width: '53%',
      },
    },
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      styles: {
        positions: {
          name: {
            top: '3%',
            left: '18.3%',
          },
        },
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
        width: '77%',
        'line-height': '2.2em',
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
        top: '65.6%',
        left: '8.9%',
        height: '25.1%',
        width: '83%',
        'line-height': '1.66em',
      },
    },
  },
  baseSetOverwrites: {
    [sunAndMoon.id]: {
      styles: {
        positions: {
          description: {
            top: '66.4%',
            height: '23.5%',
            'line-height': '1.86em',
          },
        },
      },
    },
  },
};

export const supertypes: Supertype[] = [pokemon, trainer, energy];
