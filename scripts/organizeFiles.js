const fs = require('fs');
const path = require('path');

const typeMap = {
  C: 'colorless',
  D: 'dark',
  F: 'fighting',
  G: 'grass',
  L: 'lightning',
  M: 'metal',
  N: 'dragon',
  P: 'psychic',
  R: 'fire',
  W: 'water',
  Y: 'fairy',
};

const rarityMap = {
  FA: 'fullArt',
  RB: 'rainbow',
  FAGold: 'goldenFullArtPokemon',
};

const organizeType = (typeName) => {
  const DIRECTORY = './scripts/organize';
  const IN_DIRECTORY = `${DIRECTORY}/in/${typeName}`;
  const OUT_DIRECTORY = `${DIRECTORY}/out/${typeName.toLowerCase()}`;

  /**
   * This function can be used to organize files into the correct folders before adding them as assets
   */
  const organizeFiles = async () => {
    const relativePaths = await fs.promises.readdir(IN_DIRECTORY, { withFileTypes: true });

    const files = await Promise.all(
      relativePaths.map(async item => {
        const absolutePath = path.resolve(IN_DIRECTORY, item.name);
        return {
          name: item.name.replace('.png', ''),
          path: absolutePath,
        }
      }),
    );

    files.forEach(file => {
      if (![
        '4_GX Basic',
        '5_GX Stage 1',
        '6_GX Stage 2',
      ].includes(file.name)) {
        return;
      }

      // Everything in this scope is configurable per file name structure
      const [_, __, rarity, subtype, subTypeNum] = file.name.split(' ');

      const finalSubtype = `gx${subtype.replace(' ', '')}${subTypeNum || ''}`;

      const writeToDir = `${OUT_DIRECTORY}/subtypes/${finalSubtype}/variations/ultraBeast/rarities`;

      if (!fs.existsSync(writeToDir)) {
        fs.mkdirSync(writeToDir, { recursive: true });
      }

      fs.renameSync(file.path, `${writeToDir}/${rarityMap[rarity]}.png`);
    })
  };

  (async () => {
    await organizeFiles();
  })();
}

[
  'Colorless',
  'Dark',
  'Dragon',
  'Fairy',
  'Fighting',
  'Fire',
  'Grass',
  'Lightning',
  'Metal',
  'Psychic',
  'Water',
].forEach(organizeType);
