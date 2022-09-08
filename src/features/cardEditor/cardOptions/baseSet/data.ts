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
      cardInfoContainer: {
        bottom: '3.6%',
      },
      cardInfoBar: {
        gap: '0.8em',
        'align-items': 'flex-end',
      },
      setIcon: {
        height: '2em',
        width: '2em',
      },
      cardNumber: {
        'font-size': '1.15em',
      },
      rarityIcon: {
        'margin-left': '-0.35em',
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
      cardInfoContainer: {
        bottom: '4%',
      },
      cardInfoBar: {
        gap: '0.75em',
        'align-items': 'center',
      },
      setIcon: {
        height: '1.7em',
        width: '1.7em',
      },
      cardNumber: {
        'font-size': '1.1em',
      },
      rarityIcon: {
        'margin-left': '-0.15em',
      },
    },
  },
};

export const baseSets: BaseSet[] = [swordAndShield, sunAndMoon];
