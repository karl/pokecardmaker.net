import { BaseSet } from '@cardEditor/cardOptions/baseSet';

export const swordAndShield: BaseSet = {
  id: 1,
  slug: 'swordAndShield',
  displayName: 'Sword & Shield',
  styles: {
    positions: {
      name: {
        height: '6%',
      },
    },
  },
};

export const sunAndMoon: BaseSet = {
  id: 2,
  slug: 'sunAndMoon',
  displayName: 'Sun & Moon',
  logic: {
    hasRotationIcon: false,
  },
  styles: {
    hasTypeImgBorder: false,
    positions: {
      name: {
        height: '6%',
      },
      typeImgContainer: {
        top: '2.4%',
        right: '5.1%',
        height: '4.2%',
      },
      typeImg: {
        width: '2.5em',
        height: '2.5em',
      },
    },
  },
};

export const baseSets: BaseSet[] = [swordAndShield, sunAndMoon];
