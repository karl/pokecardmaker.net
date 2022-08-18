import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppProps as NextAppProps } from 'next/app';
import { FC } from 'react';
import theme from '@utils/theme';
import { createEmotionCache } from '@css';
import { CardOptionsProvider } from '@cardEditor/cardOptions';
import { CardStylesProvider } from '@cardEditor/cardStyles';
import { CardLogicProvider } from '@cardEditor/cardLogic';
import { CardDebugProvider } from '@cardEditor/cardDebug';
import { Footer, Header } from '@layout';
import { Background, MainContainer } from '.';

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
      <CardOptionsProvider>
        <CardDebugProvider>
          <CardLogicProvider>
            <CardStylesProvider>
              <CssBaseline />
              <Background>
                <Header />
                <MainContainer as="main">
                  <Component {...pageProps} />
                </MainContainer>
                <Footer />
              </Background>
            </CardStylesProvider>
          </CardLogicProvider>
        </CardDebugProvider>
      </CardOptionsProvider>
    </ThemeProvider>
  </CacheProvider>
);

export default App;
