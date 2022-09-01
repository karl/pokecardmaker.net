import { useTheme } from '@mui/material';
import { FC } from 'react';

const Favicon: FC = () => {
  const theme = useTheme();

  return (
    <>
      <link rel="manifest" href="/favicon/manifest.json" />
      <link
        rel="apple-touch-icon"
        sizes="60x60"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color={theme.palette.primary.main}
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta
        name="msapplication-TileColor"
        content={theme.palette.primary.main}
      />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content={theme.palette.primary.main} />
    </>
  );
};

export default Favicon;
