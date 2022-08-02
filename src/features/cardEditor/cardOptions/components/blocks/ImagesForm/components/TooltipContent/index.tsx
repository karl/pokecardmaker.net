import Image from 'next/image';
import { FC } from 'react';
import demoBackgroundImg from '@assets/images/demoBackground.png';
import demoLayer1Img from '@assets/images/demoLayer1.png';
import demoLayer2Img from '@assets/images/demoLayer2.png';
import demoCardImg from '@assets/cards/baseSets/swordAndShield/supertypes/pokemon/types/water/subtypes/basic.png';
import demoFullImg from '@assets/images/demoFull.png';
import { ArrowRightAlt as ArrowRightIcon } from '@mui/icons-material';
import {
  FullImage,
  ImagesWrapper,
  PerspectiveImg,
  PerspectiveWrapper,
} from './styles';

const TooltipContent: FC = () => (
  <>
    <ImagesWrapper>
      <PerspectiveWrapper>
        <PerspectiveImg>
          <Image src={demoBackgroundImg} layout="fill" />
        </PerspectiveImg>
        <PerspectiveImg $translateX={20}>
          <Image src={demoLayer1Img} layout="fill" />
        </PerspectiveImg>
        <PerspectiveImg $translateX={60}>
          <Image src={demoCardImg} layout="fill" />
        </PerspectiveImg>
        <PerspectiveImg $translateX={100}>
          <Image src={demoLayer2Img} layout="fill" />
        </PerspectiveImg>
      </PerspectiveWrapper>
      <ArrowRightIcon fontSize="large" />
      <FullImage>
        <Image src={demoFullImg} />
      </FullImage>
    </ImagesWrapper>
  </>
);

export default TooltipContent;
