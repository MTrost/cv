import { PureComponent, ReactNode } from 'react'
import Content from '../content'
import Header from '../header'
import Stripe, { Stripes } from '../stripe'
import './patterns.css'
import styles from './styles.css'

export default class Layout extends PureComponent {
  public render(): ReactNode {
    return (
      <div className={styles.layout}>
        <Stripe position={Stripes.Top} />
        <Header />
        <Content />
        <Stripe position={Stripes.Bottom} />
      </div>
    )
  }
}
