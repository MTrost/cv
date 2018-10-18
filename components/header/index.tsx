import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'

export default class Header extends PureComponent {
  public render(): ReactNode {
    return (
      <div className={styles.header}>
        <div className={'container'}>
          <div className={styles.hexagon} />
          <div className={styles.intro}>
            <h1>Damian Frizzi</h1>
            <h2>Frontend Engineer</h2>

            <div className={styles.subHeader}>
              <ul>
                <li>
                  <img width={16} height={16} src="/static/images/github.svg" alt="Github Icon" />
                  &nbsp;
                  <a href="https://github.com/damianfrizzi">github.com/damianfrizzi</a>
                </li>
                <li>
                  <img width={16} height={16} src="/static/images/twitter.svg" alt="Twitter Icon" />
                  &nbsp;
                  <a href="https://twitter.com/damianfrizzi">twitter.com/damianfrizzi</a>
                </li>
              </ul>

              <ul>
                <li>
                  <a href="mailto:damianfrizzi@gmail.com">damianfrizzi@gmail.com</a>
                </li>
                <li>
                  <a href="tel:+41 79 739§ 03 27">+41 79 739 03 27</a>
                </li>
                <li>Gerbiweg 20, 8910 Affoltern am Albis</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
