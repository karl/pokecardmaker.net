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
      prevolveName: {
        'letter-spacing': '0.01em',
        top: '9.7%',
        left: '17.8%',
      },
      dexStats: {
        top: '48%',
      },
      typeBar: {
        bottom: '11.2%',
        width: '88.8%',
      },
      weakness: {
        left: '13.3%',
      },
      resistance: {
        left: '42.5%',
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
      dexEntry: {
        'text-align': 'right',
        width: '58%',
      }
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
      hitpoints: {
        top: '3.7%',
        right: '13.6%',
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
      prevolveImg: {
        // TODO: Make octagonal
      },
      prevolveName: {
        'letter-spacing': '-0.04em',
        top: '9.1%',
        left: '17.4%',
      },
      dexStats: {
        top: '47.9%',
      },
      typeBar: {
        bottom: '10.8%',
        width: '91.8%',
      },
      weakness: {
        left: '13.7%',
      },
      resistance: {
        left: '45.6%',
      },
      cardInfoContainer: {
        gap: '0.5em',
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
        'min-width': '3.8em',
      },
      rarityIcon: {
        'margin-left': '-0.15em',
      },
      dexEntry: {
        'text-align': 'left',
        'width': '50%',
      }
    },
  },
};

export const baseSets: BaseSet[] = [swordAndShield, sunAndMoon];
