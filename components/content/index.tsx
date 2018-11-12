import { PureComponent, ReactNode } from 'react'
import PrintBreakBefore from '../print/breakbefore'
import Education from './education'
import Experience from './experience'
import { Languages } from './languages'
import Personal from './personal'
import Skills from './skills'

export default class Content extends PureComponent {
  public render(): ReactNode {
    return (
      <main>
        <Experience />
        <PrintBreakBefore />
        <Education />
        <Skills />
        <PrintBreakBefore />
        <Languages />
        <Personal />
      </main>
    )
  }
}
