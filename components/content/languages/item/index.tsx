import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'
import { ILanguageProps } from './types'

export default class Language extends PureComponent<ILanguageProps> {
  public render(): ReactNode {
    const { language } = this.props

    return (
      <div className={styles.languageWrapper}>
        <h2>{language.title}</h2>
        <p>{language.proficiency}</p>
      </div>
    )
  }
}
