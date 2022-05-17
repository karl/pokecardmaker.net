import { SEO } from '@components';
import CardDisplay from '@components/CardDisplay';
import { FC } from 'react';
import CardOptionsForm from 'src/components/cardOptions/CardOptionsForm';

const Home: FC = () => (
  <>
    <SEO
      title="Creator"
      description="Create your own custom Pokémon cards in the Sword and Shield format!"
    />
    {/* <CssExample /> */}
    <div style={{ display: 'flex' }}>
      <CardOptionsForm />
      <CardDisplay />
    </div>
  </>
);

export default Home;
