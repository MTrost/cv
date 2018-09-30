import Document, { Head, Main, NextScript } from 'next/document'

export default class CustomDocument extends Document {
  public render(): JSX.Element {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" key="viewport" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
