import { FC } from 'react';
import { Box } from '@mui/system';
import CardOptionsForm from '@cardEditor/cardOptions/components/CardOptionsForm';
import CardDisplay from '@cardEditor/cardStyles/components/CardDisplay';
import { SEO } from '@layout';
import { CardWrapper } from './styles';

// TODO: Restyle this (and make new homepage?)
const Home: FC = () => (
  <>
    <SEO
      title="Creator"
      description="Create your own custom Pokémon cards in the Sword and Shield format!"
    />
    <Box display="flex" gap={4}>
      <CardOptionsForm />
      <CardWrapper>
        <CardDisplay />
      </CardWrapper>
    </Box>
  </>
);

export default Home;
