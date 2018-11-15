export interface ITimelineProps {
  items: ITimeLineItem[]
}

export interface ITimeLineItem {
  title: string
  location: string
  description?: string | []
  descriptions?: string[]
  dateFrom: string
  dateTo: string
}
