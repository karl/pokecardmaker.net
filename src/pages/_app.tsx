import { CacheProvider, EmotionCache, ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { AppProps as NextAppProps } from 'next/app';
import { FC } from 'react';
import { Footer, Header } from '@components';
import { theme } from '@utils';
import { createEmotionCache } from '@css';

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
      <CssBaseline />
      <Header />
      {/* TODO: Remove this style */}
      <main style={{ minHeight: 'calc(100vh - 143px)' }}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </ThemeProvider>
  </CacheProvider>
);

export default App;
