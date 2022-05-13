import { SEO } from '@components';
import { FC } from 'react';
import CardOptionsForm from 'src/components/cardOptions/CardOptionsForm';

const Home: FC = () => (
  <>
    <SEO
      title="Creator"
      description="Create your own custom Pokémon cards in the Sword and Shield format!"
    />
    {/* <CssExample /> */}
    <CardOptionsForm />
  </>
);

export default Home;
