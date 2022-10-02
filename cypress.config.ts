import { defineConfig } from 'cypress';
import { addMatchImageSnapshotPlugin } from '@simonsmith/cypress-image-snapshot/plugin';

export default defineConfig({
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack',
    },
    setupNodeEvents(on, config) {
      addMatchImageSnapshotPlugin(on, config);
    },
  },
});
