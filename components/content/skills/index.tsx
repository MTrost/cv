import { PureComponent, ReactNode } from 'react'
import { Anchors } from '../../enums'
import Intersection from '../intersection'
import Skill from './skill'
import styles from './styles.css'
import { ISkill } from './types'

export default class Skills extends PureComponent {
  private skills: ISkill[] = [
    {
      category: 'JavaScript',
      expertise: 90,
      keywordsProficient: ['ES2016', 'ES2015', 'Node.JS', 'TypeScript', 'React', 'Next.js', 'AngularJS (v1)', 'RequireJS', 'Backbone.js'],
      keywordsBasic: ['React Native', 'Vue.JS', 'Electron', 'Ionic', 'NativeScript', 'Phonegap/Cordova']
    },
    {
      category: 'HTML & CSS',
      expertise: 90,
      keywordsProficient: ['HTML5', 'CSS', 'CSS Modules', 'Sass'],
      keywordsBasic: ['Styled Components', 'Less', 'Stylus']
    },
    {
      category: 'Version Control',
      expertise: 80,
      keywordsProficient: ['Git', 'SVN', 'Github', 'Bitbucket']
    },
    {
      category: 'Testing',
      expertise: 80,
      keywordsProficient: ['Unit & UI Testing (Snapshot & E2E)', 'react-testing-library', 'Enzyme', 'Jest', 'Chai', 'Cypress'],
      keywordsBasic: ['Browser Stack Live', 'Selenium']
    },
    {
      category: 'Automation, Build & Packaging Tools',
      expertise: 60,
      keywordsProficient: ['Webpack', 'Grunt', 'Gulp', 'Bower', 'Yarn', 'npm']
    },
    {
      category: 'CI, CD & DevOps',
      expertise: 50,
      keywordsProficient: ['VSTS', 'TeamCity', 'Docker'],
      keywordsBasic: ['Azure', 'Kubernetes']
    },
    {
      category: 'C# & .NET',
      expertise: 30
    },
    {
      category: 'PHP',
      expertise: 30
    }
  ]

  public render(): ReactNode {
    return (
      <Intersection title={Anchors.Skills}>
        <div className={styles.skillsWrapper}>
          {this.skills.map((skill: ISkill, i: number) => (
            <Skill key={i} skill={skill} />
          ))}
        </div>
      </Intersection>
    )
  }
}
