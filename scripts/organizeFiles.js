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
      if (file.name !== '1_Basic' && file.name !== '2_Stage 1' && file.name !== '3_Stage 2') {
        return;
      }

      // Everything in this scope is configurable per file name structure
      const [_, subtype] = file.name.split('_');

      const writeToDir = `${OUT_DIRECTORY}/subtypes`;

      if (!fs.existsSync(writeToDir)) {
        fs.mkdirSync(writeToDir, { recursive: true });
      }

      fs.renameSync(file.path, `${writeToDir}/${subtype.replace(' ', '').toLowerCase()}.png`);
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
