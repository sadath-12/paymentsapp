import '../styles/globals.css'
import { CacheProvider } from "@emotion/react";
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function MyApp({ Component, emotionCache = clientSideEmotionCache, pageProps }) {
  return <CacheProvider value={emotionCache} >

   <Component {...pageProps} />
  </CacheProvider>
}

export default MyApp
