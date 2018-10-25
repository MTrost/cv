import App, { Container } from 'next/app'
import Head from 'next/head'
import React, { ReactNode } from 'react'

export default class MyApp extends App {
  public render(): ReactNode {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Head>
          <title>Damian Frizzi - Frontend Engineer</title>
        </Head>
        <Component {...pageProps} />
      </Container>
    )
  }
}
