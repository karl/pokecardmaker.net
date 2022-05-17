import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppProps as NextAppProps } from 'next/app';
import { FC } from 'react';
import { Footer, Header } from '@components';
import { theme } from '@utils';
import { createEmotionCache } from '@css';
import { CardCreatorProvider } from 'src/context/CardCreatorContext';
import { MainContainer } from './styles';

interface AppProps extends NextAppProps {
  emotionCache: EmotionCache;
}

const clientSideCache = createEmotionCache();

const App: FC<AppProps> = ({
  emotionCache = clientSideCache,
  Component,
  pageProps,
}) => (
  <CacheProvider value={emotionCache}>
    <ThemeProvider theme={theme}>
      <CardCreatorProvider>
        <CssBaseline />
        <Header />
        <MainContainer as="main">
          <Component {...pageProps} />
        </MainContainer>
        <Footer />
      </CardCreatorProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
