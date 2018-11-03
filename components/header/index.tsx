import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'
import { IIcon } from './types'

export default class Header extends PureComponent {
  private githubIcon: IIcon = {
    path: '/static/images/github.svg',
    alt: 'Github Icon'
  }
  private twitterIcon: IIcon = {
    path: '/static/images/twitter.svg',
    alt: 'Twitter Icon'
  }
  private emailIcon: IIcon = {
    path: '/static/images/email.svg',
    alt: 'Email Icon'
  }
  private phoneIcon: IIcon = {
    path: '/static/images/phone.svg',
    alt: 'Phone Icon'
  }
  private pinIcon: IIcon = {
    path: '/static/images/pin.svg',
    alt: 'Pin Icon'
  }

  public render(): ReactNode {
    return (
      <div className={styles.header}>
        <div className={'container'}>
          <div className={styles.hexagon} />
          <div className={styles.intro}>
            <h1>Damian Frizzi</h1>
            <h2>Frontend Engineer</h2>

            <p>
              This CV was created using Next.js, TypeScript and Pupeteer.
              <br />
              Checkout the source code at <a href="https://github.com/damianfrizzi/cv">github.com/damianfrizzi/cv</a>
            </p>

            <div className={styles.subHeader}>
              <ul>
                <li>
                  {this.getIcon(this.githubIcon)}
                  &nbsp;
                  <a href="https://github.com/damianfrizzi">github.com/damianfrizzi</a>
                </li>
                <li>
                  {this.getIcon(this.twitterIcon)}
                  &nbsp;
                  <a href="https://twitter.com/damianfrizzi">twitter.com/damianfrizzi</a>
                </li>
              </ul>

              <ul>
                <li>
                  {this.getIcon(this.emailIcon)}
                  &nbsp;
                  <a href="mailto:damianfrizzi@gmail.com">damianfrizzi@gmail.com</a>
                </li>
                <li>
                  {this.getIcon(this.phoneIcon)}
                  &nbsp;
                  <a href="tel:+41 79 739§ 03 27">+41 79 739 03 27</a>
                </li>
                <li>
                  {this.getIcon(this.pinIcon)}
                  &nbsp; Gerbiweg 20, 8910 Affoltern am Albis
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  private getIcon = (icon: IIcon): ReactNode => {
    return (
      <div className={styles.imageWrapper}>
        <img width={16} height={16} src={icon.path} alt={icon.alt} />
      </div>
    )
  }
}
