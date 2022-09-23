import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppProps as NextAppProps } from 'next/app';
import { FC, useEffect } from 'react';
import theme from '@utils/theme';
import { createEmotionCache } from '@css';
import { CardOptionsProvider } from '@cardEditor/cardOptions';
import { CardStylesProvider } from '@cardEditor/cardStyles';
import { CardLogicProvider } from '@cardEditor/cardLogic';
import { CardDebugProvider } from '@cardEditor/cardDebug';
import { Footer, Header } from '@layout';
import { AnalyticsProvider } from '@features/analytics';
import CookieConsent from '@components/CookieConsent';
import GoatCounter from '@features/analytics/components/GoatCounter';
import { GoogleTagManagerScript } from '@features/analytics/components/GTM';
import { useRouter } from 'next/router';
import { Background, MainContainer } from './styles';

interface AppProps extends NextAppProps {
  emotionCache: EmotionCache;
}

const clientSideCache = createEmotionCache();

const App: FC<AppProps> = ({
  emotionCache = clientSideCache,
  Component,
  pageProps,
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.goatcounter?.count();
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CardOptionsProvider>
          <CardDebugProvider>
            <CardLogicProvider>
              <CardStylesProvider>
                <AnalyticsProvider>
                  <GoogleTagManagerScript />
                  <GoatCounter />
                  <CssBaseline />
                  <Background>
                    <CookieConsent />
                    <Header />
                    <MainContainer as="main">
                      <Component {...pageProps} />
                    </MainContainer>
                    <Footer />
                  </Background>
                </AnalyticsProvider>
              </CardStylesProvider>
            </CardLogicProvider>
          </CardDebugProvider>
        </CardOptionsProvider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
