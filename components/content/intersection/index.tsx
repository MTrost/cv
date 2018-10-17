import { PureComponent, ReactNode } from 'react'
import Title from '../title'
import styles from './styles.css'
import { IIntersectionProps } from './types'

export default class Intersection extends PureComponent<IIntersectionProps> {
  public render(): ReactNode {
    const { children, title } = this.props

    return (
      <div className={styles.intersection}>
        <Title id={title}>{title}</Title>

        <div className={'container'}>{children}</div>

        <div className="sticky_sentinel sticky_sentinel--top" />
        <div className="sticky_sentinel sticky_sentinel--bottom" />
      </div>
    )
  }
}
