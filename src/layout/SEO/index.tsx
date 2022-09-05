import Head from 'next/head';
import { FC } from 'react';

interface SEOProps {
  description: string;
  title?: string;
  siteTitle?: string;
  fullTitle?: string;
}

const SEO: FC<SEOProps> = ({
  description,
  title,
  siteTitle = 'Pokécardmaker.net',
  fullTitle,
}) => (
  <Head>
    <title>{fullTitle ?? `${title} | ${siteTitle}`}</title>
    <meta name="description" content={description} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={siteTitle} />
    {/* TODO: Change this image to avoid cropping */}
    <meta property="og:image" content="https://pokecardmaker.net/assets/images/metaImage.png" />
    <meta property="twitter:card" content="summary" />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content="https://pokecardmaker.net/assets/images/metaImage.png" />
  </Head>
);

export default SEO;
