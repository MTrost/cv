import Document, { Head, Main, NextScript } from 'next/document'
import { ReactNode } from 'react'

export default class CustomDocument extends Document {
  public render(): ReactNode {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
