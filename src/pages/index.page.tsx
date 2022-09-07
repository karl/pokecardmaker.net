import { FC } from 'react';
import { SEO } from '@layout';
import { Box, Button, Link, Typography } from '@mui/material';
import { siteDescription } from 'src/constants';
import { Forward as ForwardIcon } from '@mui/icons-material';
import Image from 'next/image';
import NextLink from 'next/link';
import Routes from '@routes';
import { useType } from '@cardEditor/cardOptions/type';
import banner from '@assets/images/banner.png';
import { List, PaperBox, TypeList } from './styles';

const Home: FC = () => {
  const { pokemonTypes } = useType();

  return (
    <>
      <SEO
        fullTitle="Pokécardmaker.net | Create modern custom Sword & Shield cards"
        description={siteDescription}
      />
      <Box gap={4} display="flex" flexDirection="column">
        <PaperBox>
          <Image src={banner} />
          <Typography variant="h2" textAlign="center">
            {siteDescription}
          </Typography>
          <NextLink href={Routes.Creator} passHref>
            <Button variant="contained" endIcon={<ForwardIcon />} size="large">
              Get started now
            </Button>
          </NextLink>
        </PaperBox>
        <PaperBox>
          <Typography variant="h2">
            110+ different card images and growing
          </Typography>
          <Typography textAlign={[null, 'center']}>
            We&apos;ve got all the top card images you wish for and are always
            aiming to keep adding more unique and custom types. If you&apos;re
            missing any types, feel free to create a post on the{' '}
            <Link href={Routes.GitHub.Discussions.Ideas} target="_blank">
              GitHub discussions page
            </Link>
            .
          </Typography>
          <Box
            width="100%"
            display="flex"
            gap={4}
            justifyContent="center"
            flexDirection={['column', 'row']}
          >
            <Box display="flex" flexDirection="column" gap={2}>
              <div>
                <Typography variant="h4">Energy cards</Typography>
                <List>
                  <li>Base Energy</li>
                  <li>Special Energy</li>
                </List>
              </div>
              <div>
                <Typography variant="h4">Trainer cards</Typography>
                <List>
                  <li>Supporter</li>
                  <li>Full Art Supporter</li>
                  <li>Item</li>
                  <li>Tool Item</li>
                </List>
              </div>
            </Box>
            <div>
              <Typography variant="h4">Pokémon cards</Typography>
              <Typography variant="caption">
                In {pokemonTypes.length} different types
              </Typography>
              <TypeList>
                {pokemonTypes.map(pt => (
                  <li key={pt.slug}>
                    <Image
                      alt={pt.displayName}
                      height={20}
                      width={20}
                      src={Routes.Assets.Icons.Type(pt.slug)}
                    />
                  </li>
                ))}
              </TypeList>
              {/* Add all icons here */}
              <List>
                <li>Basic Pokémon</li>
                <li>Gold Star Basic Pokémon</li>
                <li>Promo Basic Pokémon</li>
                <li>Stage 1 Pokémon</li>
                <li>Stage 2 Pokémon</li>
                <li>Pokémon V</li>
                <li>Pokémon V Full Art</li>
                <li>Pokémon V Golden Full Art</li>
                <li>Pokémon V-Max Dynamax</li>
                <li>Rainbow Pokémon V-Max Dynamax</li>
                <li>Pokémon V-Max Gigantamax</li>
                <li>Rainbow Pokémon V-Max Gigantamax</li>
              </List>
            </div>
          </Box>
        </PaperBox>
      </Box>
    </>
  );
};

export default Home;
