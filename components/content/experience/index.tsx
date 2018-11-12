import { ITimeLineItem } from 'components/timeline/types'
import { PureComponent, ReactNode } from 'react'
import { Anchors, Locations } from '../../enums'
import Timeline from '../../timeline'
import Section from '../section'

export default class Experience extends PureComponent {
  private items: ITimeLineItem[] = [
    {
      title: 'Lead Frontend Engineer',
      location: Locations.DigitecGalaxus,
      dateFrom: 'May 2018',
      dateTo: 'Present',
      description:
        'Responsible for the conception, implementation and launch of a highly modernized, universal (isomorphic) Frontend using React, GraphQL, Apollo and ASP.NET Web API with the goal to improve the user experience and increase development speed by decoupling the entire Frontend from the existing monolithic application. Coaching, training and mentoring of Engineers using the new stack within the department.'
    },
    {
      title: 'Teamleader Frontend Engineering & User Experience',
      location: Locations.DigitecGalaxus,
      dateFrom: 'June 2016',
      dateTo: 'May 2018',
      description:
        'Administration, recruiting, coordination and leadership of a team consisting of five Frontend Engineers, three Interaction Designers and one UX-Researcher. Development of mobile applications (iOS & Android) using React Native. Conception and implementation of a revamped Frontend architecture with the goal to decouple the entire Frontend from the existing monolithic application.'
    },
    {
      title: 'Frontend Engineer',
      location: Locations.DigitecGalaxus,
      dateFrom: 'October 2014',
      dateTo: 'June 2016',
      description:
        'Responsible for maintaining and improving the Frontend of the onlineshops of Digitec Galaxus AG (digitec.ch & galaxus.ch) in close collaboration with the Backend Engineers, Business Development and the CTO as Product Owner. Restructuring of the whole website from the given adaptive design to a fully responsive website to improve user experience and to stop the development of the second software project. Assistance in hiring new Frontend Engineers and Interaction Designers.'
    },
    {
      title: 'Junior Frontend Engineer',
      location: Locations.DigitecGalaxus,
      dateFrom: 'May 2013',
      dateTo: 'October 2014',
      description:
        'Successfully implemented about 15 projects (mostly small and medium-sized enterprises) for the company its design agency besides working on the onlineshops digitec.ch and galaxus.ch. Confrontation with different frameworks and technologies (Backbone.js, Require-JS, AngularJS, Git, SVN etc.). Atlassian software (Jira & Confluence) and Scrum methodolgy was used for all projects.'
    },
    {
      title: 'Web Developer',
      location: Locations.Glencore,
      dateFrom: 'June 2010',
      dateTo: 'December 2010',
      description:
        'Development of interactive floorplans to assign seats to employess. The implementation was done using PHP and MySQL in the backend to fetch data through a RESTful Lotus Notes webservice and JavaScript, HTML and CSS in the Frontend to create an interactive experience.'
    }
  ]

  public render(): ReactNode {
    return (
      <Section title={Anchors.Experience}>
        <Timeline items={this.items} />
      </Section>
    )
  }
}
