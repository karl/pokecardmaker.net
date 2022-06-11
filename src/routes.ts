import { AbilitySymbol, NameSymbol } from '@interfaces/cardOptions/cardStyles';

const assets = '/assets';
const icons = `${assets}/icons`;
const symbols = `${assets}/symbols`;

const Routes = {
  Assets: {
    Cards: `${assets}/cards`,
    Icons: {
      Set: (slug: string) => `${icons}/sets/${slug}.png`,
      Rotation: (slug: string) => `${icons}/rotations/${slug}.png`,
      Rarity: (slug: string) => `${icons}/rarities/${slug}.png`,
      Type: (slug: string) => `${icons}/types/${slug}.png`,
      TypeBorder: (slug: string) => `${icons}/types/border/${slug}.png`,
    },
    Symbols: {
      Name: (slug: NameSymbol) => `${symbols}/name/${slug}.png`,
      Ability: (slug: AbilitySymbol) => `${symbols}/ability/${slug}.png`,
    },
  },
};

export default Routes;
