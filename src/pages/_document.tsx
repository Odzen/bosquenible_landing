/* eslint-disable react/no-danger */


import Document, { Head, Html, Main, NextScript, DocumentContext } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const TagManagerHead: React.FC = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`}
    />
    {/* eslint-disable-next-line @next/next/next-script-for-ga */}
    <script
      dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',${process.env.GTM_ID});`
      }}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
        page_path: window.location.pathname,
      });
    `
      }}
    />
  </>
)

const TagManagerBody: React.FC = () => (
  <>
    <noscript
      dangerouslySetInnerHTML={{
        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${process.env.GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`
      }}
    />
  </>
)

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />)
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

  public render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='google' content='notranslate' />
          {/* <!-- Primary Meta Tags --> */}
          <meta name="title" content="Falco - We help studios launch top quality games in web3 - fast" />
          <meta name="description" content="From blockchain infrastructure to Marketing/Community management. The complete solution for your web3 project launching" />

          <meta name='robots' content='index, follow' />
          <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
          <meta name='language' content='English' />
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='' />
          <link
            href='https://fonts.googleapis.com/css2?family=Saira:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&display=swap'
            rel='stylesheet'
          />
          {process.env.NODE_ENV === 'production' && <TagManagerHead />}
        </Head>
        <body>
          {process.env.NODE_ENV === 'production' && <TagManagerBody />}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
