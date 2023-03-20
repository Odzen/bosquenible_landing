import React from 'react'

import type { AppProps } from 'next/app'
import { createGlobalStyle, ThemeProvider } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Frutiger LT Std';
    src: url('/fonts/FrutigerLTStd-Light.otf');
    font-weight: 400;
  }

  @font-face {
      font-family: 'Frutiger LT Std';
      src: url('/fonts/FrutigerLTStd-Roman.otf');
      font-weight: 700;
  }

  @font-face {
      font-family: 'Frutiger LT Std';
      src: url('/fonts/FrutigerLTStd-Bold.otf');
      font-weight: 900;
  }

  @font-face {
      font-family: 'Knockout HTF50-Welterweight';
      src: url('/fonts/Knockout_HTF50-Welterweight_Regular.otf');
      font-weight: 100;
  }

  @font-face {
      font-family: 'Myriad Pro';
      src: url('/fonts/Myriad_Pro_Regular.ttf');
      font-weight: 100;
  }

  :root {
    /* Colors */
    --black: #000000;
    --white: #FFFFFF;
    --orange: #FF833E;
    --light-white: #f4eee9;

    --green: #AFD080;
    --dark-green: #263E04;
  }


  body {
    margin: 0px;

    background-color: var(--white);

    font-family: "Myriad Pro", sans-serif;

    button {
      cursor: pointer;
    }
  }


`
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
export default MyApp
