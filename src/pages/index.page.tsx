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
import cardImgPaths from '@utils/cardImgPaths';
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
            {cardImgPaths.length} different card images and growing
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
                  <li>Prism Star variation</li>
                  <li>Golden Full Art rarity</li>
                </List>
              </div>
              <div>
                <Typography variant="h4">Trainer cards</Typography>
                <List>
                  <li>Supporter</li>
                  <li>Item</li>
                  <li>Tool Item</li>
                  <li>Full Art rarity</li>
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
                      src={Routes.Assets.Icons.Type('swordAndShield', pt.slug)}
                    />
                  </li>
                ))}
              </TypeList>
              <List>
                <li>Basic Pokémon</li>
                <li>Stage 1 Pokémon</li>
                <li>Stage 2 Pokémon</li>
                <li>Light variation</li>
                <li>Dark variation</li>
                <li>ex variation</li>
                <li>Gold Star rarity</li>
                <li>Character Rare rarity</li>
                <li>Promo rarity</li>
                <li>Pokémon V</li>
                <li>Pokémon V-Max Dynamax</li>
                <li>Pokémon V-Max Gigantamax</li>
                <li>Pokémon V-Star</li>
                <li>Pokémon GX (Basic)</li>
                <li>Pokémon GX (Stage 1)</li>
                <li>Pokémon GX (Stage 2)</li>
                <li>Ultra Beast variation</li>
                <li>Prism Star variation</li>
                <li>Full Art rarity</li>
                <li>Golden Full Art rarity</li>
                <li>Rainbow rarity</li>
              </List>
            </div>
          </Box>
        </PaperBox>
        <PaperBox>
          <Typography variant="h3">Thanks ❤️</Typography>
          <p style={{ margin: 0 }}>
            Huge thanks to{' '}
            <Link
              href="https://www.deviantart.com/aschefield101/gallery"
              target="_blank"
            >
              aschefield101
            </Link>{' '}
            and RuneScript for providing the template designs
          </p>
        </PaperBox>
      </Box>
    </>
  );
};

export default Home;
