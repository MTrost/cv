import { ITimeLineItem } from 'components/timeline/types'
import { PureComponent, ReactNode } from 'react'
import { Anchors, Locations } from '../../enums'
import Timeline from '../../timeline'
import Section from '../section'

export default class Education extends PureComponent {
  private items: ITimeLineItem[] = [
    {
      title: 'BA, Webdesign and Development',
      location: Locations.SAE,
      dateFrom: '2013',
      dateTo: 'Februar 2017'
    },
    {
      title: 'Diploma Webdesign and Development',
      location: Locations.SAE,
      dateFrom: '2013',
      dateTo: '2015'
    },
    {
      title: 'Swiss A-level exam ("Matura"), modern langauges',
      location: Locations.Akad,
      dateFrom: '2009',
      dateTo: '2012'
    }
  ]

  public render(): ReactNode {
    return (
      <Section title={Anchors.Education}>
        <Timeline items={this.items} />
      </Section>
    )
  }
}
