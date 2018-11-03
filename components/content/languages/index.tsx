import { PureComponent, ReactNode } from 'react'
import { Anchors, LanguageProficiencies } from '../../enums'
import Section from '../section'
import Language from './item'
import { ILanguage } from './item/types'
import styles from './styles.css'

export class Languages extends PureComponent {
  private items: ILanguage[] = [
    {
      title: 'German',
      proficiency: LanguageProficiencies.Native
    },
    {
      title: 'English',
      proficiency: LanguageProficiencies.Fluent
    },
    {
      title: 'French',
      proficiency: LanguageProficiencies.Intermediate
    },
    {
      title: 'Italian',
      proficiency: LanguageProficiencies.Intermediate
    }
  ]

  public render(): ReactNode {
    return (
      <Section title={Anchors.Languages}>
        <div className={styles.languagesWrapper}>
          {this.items.map((language: ILanguage, i: number) => (
            <Language key={i} language={language} />
          ))}
        </div>
      </Section>
    )
  }
}
