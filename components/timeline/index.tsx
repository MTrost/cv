import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'
import { ITimeLineItem, ITimelineProps } from './types'

export default class Timeline extends PureComponent<ITimelineProps> {
  public render(): ReactNode {
    const { items } = this.props

    return items.map((item: ITimeLineItem, i: number) => (
      <article key={i} className={styles.timelineItem}>
        <div className={styles.timeLineItemDeco} />
        <div className={styles.timeLineItemContent}>
          <h2>
            {item.title} <small>@{item.location}</small>
          </h2>
          <small>
            {item.dateFrom} - {item.dateTo}
          </small>
          {item.description && <p>{item.description}</p>}
        </div>
      </article>
    ))
  }
}
