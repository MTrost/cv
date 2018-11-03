import { PureComponent, ReactNode } from 'react'
import Card from '../../card'
import { Anchors, LanguageProficiencies } from '../../enums'
import Section from '../section'
import styles from './styles.css'
import { ILanguage } from './types'

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
            <Card key={i}>
              <h2>{language.title}</h2>
              <small>{language.proficiency}</small>
            </Card>
          ))}
        </div>
      </Section>
    )
  }
}
