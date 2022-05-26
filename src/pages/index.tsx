import { SEO } from '@components';
import { FC, useEffect } from 'react';
import CardOptionsForm from '@components/cardOptions/CardOptionsForm';
import CardDisplay from '@components/cardRenderer/CardDisplay';
import { GetStaticProps } from 'next';
import { constructCardImgObj } from '@utils/constructCardImageObj';
import useCardOptions from '@hooks/cardOptions/useCardOptions';

interface CardImageProps {
  cardImgObj: object | null;
}

const Home: FC<CardImageProps> = ({ cardImgObj }) => {
  const { setCardImgObj } = useCardOptions();

  useEffect(() => {
    setCardImgObj(cardImgObj || undefined);
  }, [cardImgObj, setCardImgObj]);

  return (
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
};

// TODO: Maybe don't do this per page but just once at build-time
export const getStaticProps: GetStaticProps<CardImageProps> = async () => {
  // In development each refresh triggers this, and that takes too long
  const cardImgObj =
    process.env.NODE_ENV !== 'development' ? await constructCardImgObj() : null;
  return {
    props: {
      cardImgObj,
    },
  };
};

export default Home;
