import { PureComponent, ReactNode } from 'react'
import Education from './education'
import Experience from './experience'
import Personal from './personal'
import Skills from './skills'

export default class Content extends PureComponent {
  public render(): ReactNode {
    return (
      <main>
        <Experience />
        <Education />
        <Skills />
        <Personal />
      </main>
    )
  }
}
