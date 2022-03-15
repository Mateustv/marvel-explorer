import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'
import { FavoriteHeroesProvider } from '../hooks/useFavoriteHeroes'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme/default'

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <FavoriteHeroesProvider>
        <Head>
          <title>Marvel Explorer</title>
          <link rel="shortcut icon" href="/images/icon-512.png" />
          <link rel="apple-touch-icon" href="/images/icon-512.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta
            name="description"
            content="Search for your favorite heroes with this awesome app"
          />
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </FavoriteHeroesProvider>
    </ThemeProvider>

  )
}

export default App
