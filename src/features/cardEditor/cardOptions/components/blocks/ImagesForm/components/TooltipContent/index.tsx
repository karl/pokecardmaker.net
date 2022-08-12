import Image from 'next/image';
import { FC } from 'react';
import demoBackgroundImg from '@assets/images/demoBackground.png';
import demoLayer1Img from '@assets/images/demoLayer1.png';
import demoLayer2Img from '@assets/images/demoLayer2.png';
import demoCardImg from '@assets/cards/baseSets/swordAndShield/supertypes/pokemon/types/water/subtypes/basic.png';
import demoFullImg from '@assets/images/demoFull.png';
import { ArrowRightAlt as ArrowRightIcon } from '@mui/icons-material';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {
  FullImage,
  ImagesWrapper,
  NumberText,
  PerspectiveImg,
  PerspectiveWrapper,
} from './styles';

const TooltipContent: FC = () => (
  <Box display="flex" flexDirection="column" gap={2}>
    <Box>
      <ImagesWrapper>
        <PerspectiveWrapper>
          <PerspectiveImg>
            <Image src={demoBackgroundImg} layout="fill" />
            <NumberText variant="h5">1.</NumberText>
          </PerspectiveImg>
          <PerspectiveImg $translateX={20}>
            <Image src={demoLayer1Img} layout="fill" />
            <NumberText variant="h5">2.</NumberText>
          </PerspectiveImg>
          <PerspectiveImg $translateX={60}>
            <Image src={demoCardImg} layout="fill" />
            <NumberText variant="h5">3.</NumberText>
          </PerspectiveImg>
          <PerspectiveImg $translateX={100}>
            <Image src={demoLayer2Img} layout="fill" />
            <NumberText variant="h5">4.</NumberText>
          </PerspectiveImg>
        </PerspectiveWrapper>
        <ArrowRightIcon
          fontSize="large"
          sx={{
            transform: {
              xs: 'rotate(90deg)',
              md: 'rotate(0deg)',
            },
          }}
        />
        <FullImage>
          <Image src={demoFullImg} />
        </FullImage>
      </ImagesWrapper>
      <Typography variant="caption">
        Hint: You can tap the layers to get a better overview of their placement
      </Typography>
    </Box>
    <Box>
      <Typography variant="h5">1. Background</Typography>
      <Typography mb={2}>
        The background image is placed behind everything.
      </Typography>
      <Typography variant="h5">2. Layer 1</Typography>
      <Typography mb={2}>
        The layer 1 image is placed in front of the background image and behind
        the card image. This is generally used to place any character images.
      </Typography>
      <Typography variant="h5">3. Card Image</Typography>
      <Typography mb={2}>
        The card image is the Pokémon Card image you selected earlier.
      </Typography>
      <Typography variant="h5">4. Layer 2</Typography>
      <Typography mb={2}>
        The layer 2 image is placed in front of the Card Image, and behind the
        text on the card. This is generally used to overlap certain parts of
        your image over the card borders.
      </Typography>
    </Box>
  </Box>
);

export default TooltipContent;
