import { FC, useEffect } from 'react';
import { GetStaticProps } from 'next';
import { constructCardImgObj } from '@utils/constructCardImageObj';
import { Box } from '@mui/system';
import { useCardStyles } from '@cardEditor/cardStyles';
import CardOptionsForm from '@cardEditor/cardOptions/components/CardOptionsForm';
import CardDisplay from '@cardEditor/cardStyles/components/CardDisplay';
import { SEO } from '@layout';
import { CardWrapper } from './styles';

interface CardImageProps {
  cardImgObj: object | null;
}

const Home: FC<CardImageProps> = ({ cardImgObj }) => {
  const { setCardImgObj } = useCardStyles();

  useEffect(() => {
    setCardImgObj(cardImgObj || undefined);
  }, [cardImgObj, setCardImgObj]);

  return (
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
};

// TODO: Maybe don't do this per page but just once at build-time
export const getStaticProps: GetStaticProps<CardImageProps> = async () => {
  // In development each refresh triggers this, and that takes too long
  const useBase64 = process.env.NODE_ENV !== 'development';
  const cardImgObj = useBase64 ? await constructCardImgObj() : null;
  return {
    props: {
      cardImgObj,
    },
  };
};

export default Home;
