export interface ITimelineProps {
  items: ITimeLineItem[]
}

export interface ITimeLineItem {
  title: string
  location: string
  description?: string
  dateFrom: string
  dateTo: string
}
