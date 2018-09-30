import { PureComponent } from 'react'
import styles from './styles.css'

export default class Layout extends PureComponent {
  public render(): JSX.Element {
    const { children } = this.props

    return <div className={styles.layout}>{children}</div>
  }
}
