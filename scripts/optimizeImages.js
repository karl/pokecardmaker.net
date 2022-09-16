const { compress } = require('compress-images/promise');
const fs = require('fs');
const fse = require('fs-extra');

const INPUT_FOLDER = './public/assets/';
const INPUT_FILES = `${INPUT_FOLDER}**/*.png`;
const OUTPUT_FOLDER = './scripts/output/';

const process = async () => {
  // Compress all images in the input directory
  await compress({
    source: INPUT_FILES,
    destination: OUTPUT_FOLDER,
    enginesSetup: {
      png: {
        engine: 'pngquant',
        command: ['--quality=50-100', '--strip', '-s1', '-o'],
      },
    },
  });
  // Copy them to the original input directory
  fse.copySync(OUTPUT_FOLDER, INPUT_FOLDER, { overwrite: true });
  // Remove the temporary output directory
  fs.rmSync(OUTPUT_FOLDER, { recursive: true, force: true });
};

process();
