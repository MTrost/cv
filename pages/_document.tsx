import Document, { Head, Main, NextScript } from 'next/document'
import { ReactNode } from 'react'

export default class CustomDocument extends Document {
  public render(): ReactNode {
    return (
      <html lang="en">
        <Head>
          <meta content="Website built with Next.js which can be exported as a pdf. " name="description" />
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
