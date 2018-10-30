import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'

export default class PrintBreakBefore extends PureComponent {
  public render(): ReactNode {
    return <div className={styles.breakBefore} />
  }
}
