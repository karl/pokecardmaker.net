const fs = require('fs');
const sharp = require('sharp');
const cardImgPaths = require('./cardImgPaths');

const paths = cardImgPaths;
const outDir = './scripts/assets/min/';

paths.map(filePath => {
  const file = `./public/assets/cards/${filePath}.png`;
  const folder = filePath.slice(0, filePath.lastIndexOf('/'));
  const outFolder = outDir + folder;

  if (!fs.existsSync(outFolder)) {
    fs.mkdirSync(outFolder, { recursive: true });
  }

  sharp(file, { density: 1 })
    .withMetadata()
    .png({
      quality: 1,
      compressionLevel: 9,
      progressive: true,
      adaptiveFiltering: true,
      force: true,
    })
    .toFile(outFolder, console.error);
});

