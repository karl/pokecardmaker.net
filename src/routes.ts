const assets = '/assets';
const icons = `${assets}/icons`;

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
    Symbol: (slug: string) => `${assets}/symbols/${slug}.png`,
  },
};

export default Routes;
