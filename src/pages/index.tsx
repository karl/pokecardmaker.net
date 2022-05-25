import { SEO } from '@components';
import { FC, useEffect } from 'react';
import CardOptionsForm from '@components/cardOptions/CardOptionsForm';
import CardDisplay from '@components/cardRenderer/CardDisplay';
import { GetStaticProps } from 'next';
import { constructCardImgObj } from '@utils/constructCardImageObj';
import useCardOptions from '@hooks/cardOptions/useCardOptions';

interface CardImageProps {
  // An object of images structured like a directory
  cardImgObj: object;
}

const Home: FC<CardImageProps> = ({ cardImgObj }) => {
  const { setCardImgObj } = useCardOptions();

  useEffect(() => {
    setCardImgObj(cardImgObj);
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

export const getStaticProps: GetStaticProps<CardImageProps> = async () => {
  return {
    props: {
      cardImgObj: await constructCardImgObj(),
    },
  };
};

export default Home;
