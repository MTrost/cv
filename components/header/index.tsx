import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'

export default class Header extends PureComponent {
  public render(): ReactNode {
    return (
      <div className={styles.header}>
        <div className={'container'}>
          <h1>Hi there!</h1>
          <p>My name is Damian Frizzi and I'm a Frontend Engineer from Zurich, Switzerland.</p>
          <p>This website is a static exported Next.JS application which can be transformed to a pdf using Pupeteer.</p>
        </div>
      </div>
    )
  }
}
