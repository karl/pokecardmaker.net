import { FC } from 'react';
import CardOptionsForm from '@cardEditor/cardOptions/components/CardOptionsForm';
import CardDisplay from '@cardEditor/cardStyles/components/CardDisplay';
import { SEO } from '@layout';
import CardDownloader from '@cardEditor/cardOptions/components/atoms/CardDownloader';
import { CardWrapper, Wrapper } from './styles';
import ReactGA from "react-ga4";
import Analytics from '@components/Analytics';

// TODO IMPORTANT: Make new homepage with textual content for SEO
const Home: FC = () => (
  <>
    <SEO
      title="Creator"
      description="Create your own custom Pokémon cards in the Sword and Shield format!"
    />
    <Wrapper>
      <Analytics />
      {ReactGA.send("pageview")}
      <CardOptionsForm />
      <CardWrapper>
        <CardDisplay />
        <CardDownloader />
      </CardWrapper>
    </Wrapper>
  </>
);

export default Home;
