import { SEO } from '@components';
import { FC } from 'react';
import CssExample from 'src/components/CssExample';

const Home: FC = () => (
  <>
    <SEO
      title="Creator"
      description="Create your own custom Pokémon cards in the Sword and Shield format!"
    />
    <CssExample />
  </>
);

export default Home;
