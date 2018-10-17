import { PureComponent, ReactNode } from 'react'
import { Anchors } from '../enums'
import styles from './styles.css'

export default class Navigation extends PureComponent {
  public render(): ReactNode {
    return (
      <nav className={styles.navigation}>
        <div className={'container'}>
          <ul>
            <li>
              <a href={`#${Anchors.Experience}`}>Experience</a>
              <a href={`#${Anchors.Education}`}>Education</a>
              <a href={`#${Anchors.Skills}`}>Skills</a>
              <a href={`#${Anchors.Personal}`}>Personal</a>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
