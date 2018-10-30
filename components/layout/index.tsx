import classNames from 'classnames'
import { PureComponent, ReactNode } from 'react'
import Content from '../content'
import Header from '../header'
import './fonts.css'
import './patterns.css'
import styles from './styles.css'

export default class Layout extends PureComponent {
  public render(): ReactNode {
    return (
      <div className={styles.layout}>
        <div className={styles.stripe} />
        <Header />
        <Content />
        <div className={classNames(styles.stripe, styles.stripeBottom)} />
      </div>
    )
  }
}
