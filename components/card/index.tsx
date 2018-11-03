import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'

export default class Card extends PureComponent {
  public render(): ReactNode {
    const { children } = this.props

    return <div className={styles.card}>{children}</div>
  }
}
