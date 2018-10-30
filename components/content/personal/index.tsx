import { PureComponent, ReactNode } from 'react'
import { Anchors } from '../../enums'
import Section from '../section'
import PersonalItem from './item'
import styles from './styles.css'
import { IPersonalItem } from './types'

export default class Personal extends PureComponent {
  private items: IPersonalItem[] = [
    {
      title: 'Motorsports',
      description: `I started kart racing at the age of 11 and could achieve several victories (two times Swiss Champion, 4 times Vice Swiss Champion) since then. Although I stopped participating in championships two years ago I still enjoy driving around the european circuits with my personal kart.`,
      alt: 'Racing flag',
      image: '/static/images/flag.svg'
    },
    {
      title: 'Web Development',
      description: `I designed my first website 15 years ago with sliced graphics, table based layouts, framesets and fancy marquees. Today I like to play around with cutting edge technologies. Currently I'm developing an universal PWA to find unused CSS on a website using ES2015, React, Node.js and Nightmare (incl. Electron).`,
      alt: 'Web Development',
      image: '/static/images/development.svg'
    },
    {
      title: 'Travelling',
      description: 'Experiencing new countries, cultures and food has always been a passion of mine.',
      alt: 'Plane',
      image: '/static/images/plane.svg'
    }
  ]

  public render(): ReactNode {
    return (
      <Section title={Anchors.Personal}>
        <div className={styles.wrapper}>
          {this.items.map((item: IPersonalItem, i: number) => (
            <PersonalItem key={i} item={item} />
          ))}
        </div>
      </Section>
    )
  }
}
