import { SEO } from '@components';
import { FC } from 'react';
import CardOptionsForm from '@components/cardOptions/CardOptionsForm';
import CardDisplay from '@components/cardRenderer/CardDisplay';

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
