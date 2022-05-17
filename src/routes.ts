const assets = '/assets';
const icons = `${assets}/icons`;

const Routes = {
  Assets: {
    Icons: {
      Set: (slug: string) => `${icons}/sets/${slug}.png`,
      Rotation: (slug: string) => `${icons}/rotations/${slug}.png`,
      Rarity: (slug: string) => `${icons}/rarities/${slug}.png`,
    },
  },
};

export default Routes;
