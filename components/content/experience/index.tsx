import { ITimeLineItem } from 'components/timeline/types'
import { PureComponent, ReactNode } from 'react'
import { Anchors, Locations } from '../../enums'
import Timeline from '../../timeline'
import Section from '../section'
import styles from './styles.css'

export default class Experience extends PureComponent {
  private items: ITimeLineItem[] = [
    {
      title: 'Lead Frontend Engineer',
      location: Locations.DigitecGalaxus,
      dateFrom: 'May 2018',
      dateTo: 'Present',
      descriptions: [
        'Responsible for implementation and launch of a modernized, universal (isomorphic) Frontend using React, GraphQL, Apollo and ASP.NET Web API.',
        'Something more here: profiling? architecture? testing? Something something. Du kennst die technische Ausdrucksweise besser und findest sicher etwas :)',
        'Vielleicht auch was in die Richtung: Coordinating department wide integration (implementation wäre wohl besser, aber schon benutzt oben) of this new framework oder so',
        'Coaching, training and mentoring of engineers using the new stack within the department.',
        'Jedenfalls wären drei Bulletpoints am besten, fünf sind definitiv zu viel'
      ]
    },
    {
      title: 'Teamleader Frontend Engineering & User Experience',
      location: Locations.DigitecGalaxus,
      dateFrom: 'June 2016',
      dateTo: 'May 2018',
      descriptions: [
        'Recruiting, coordinating and leading a team of five Frontend Engineers, three Interaction Designers and one UX-Researcher.',
        'Conception of and prototyping a revamped Frontend architecture with the goal of decoupling the entire Frontend from the existing monolithic application.',
        'Development of mobile applications (iOS & Android) using React Native.'
      ]
    },
    {
      title: 'Frontend Engineer',
      location: Locations.DigitecGalaxus,
      dateFrom: 'October 2014',
      dateTo: 'June 2016',
      descriptions: [
        "As sole Frontend Engineer responsible for maintaining and improving the Frontend of the company's onlineshops (digitec.ch & galaxus.ch) in close collaboration with Backend Engineers, Business Development and the CTO as Product Owner.",
        'Restructuring whole website from the given adaptive design to a fully responsive website in order to improve user experience and stop maintaining and developing two software projects.',
        'Assistance in hiring new Frontend Engineers and Interaction Designers.'
      ]
    },
    {
      title: 'Junior Frontend Engineer',
      location: Locations.DigitecGalaxus,
      dateFrom: 'May 2013',
      dateTo: 'October 2014',
      descriptions: [
        "Successfully implemented 15 projects (mostly small and medium-sized enterprises) for the company's design agency besides doing development for our own onlineshops.",
        'Confrontation with different frameworks and technologies (Backbone.js, Require-JS, AngularJS, Git, SVN etc.).',
        'Atlassian software (Jira & Confluence) and Scrum methodolgy was used for all projects.'
      ]
    },
    {
      title: 'Web Developer',
      location: Locations.Glencore,
      dateFrom: 'June 2010',
      dateTo: 'December 2010',
      descriptions: [
        'Development of interactive floorplans to assign seats to employess.',
        'The implementation was done with PHP and MySQL in the backend to fetch data through a RESTful Lotus Notes webservice and JavaScript, HTML and CSS.'
      ]
    }
  ]

  public render(): ReactNode {
    return (
      <div className={styles.experience}>
        <Section title={Anchors.Experience}>
          <Timeline items={this.items} />
        </Section>
      </div>
    )
  }
}
