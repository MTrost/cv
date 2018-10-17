import { PureComponent, ReactNode } from 'react'
import Content from '../content'
import Header from '../header'
import './fonts.css'
import './patterns.css'
import styles from './styles.css'

export default class Layout extends PureComponent {
  public componentDidMount(): void {
    this.notifyWhenStickyHeadersChange()
  }

  public render(): ReactNode {
    return (
      <div className={styles.layout}>
        <Header />
        {/* <Navigation /> */}
        <Content />
      </div>
    )
  }
  /**
   * Notifies when elements that have the class `sticky` begin to stick or not.
   * Note: these should be children of the `container` element.
   */
  private notifyWhenStickyHeadersChange(): void {
    this.observeHeaders()
    this.observeFooters()
  }

  /**
   * Sets up an intersection observer to notify when elements with the class
   * `.sticky_sentinel--top` become visible/invisible at the top of the container.
   */
  private observeHeaders(): void {
    const observer = new IntersectionObserver(
      (records: IntersectionObserverEntry[]): void => {
        for (const record of records) {
          if (!record.target.parentElement || !record.target.parentElement.querySelector('.sticky')) {
            throw new Error(`Cannot find HTML element with class sticky`)
          }

          const targetInfo = record.boundingClientRect
          const stickyTarget = record.target.parentElement.querySelector('.sticky')!
          const rootBoundsInfo = record.rootBounds

          if (targetInfo.bottom < rootBoundsInfo.top) {
            this.fire(true, stickyTarget)
          }
          if (targetInfo.bottom >= rootBoundsInfo.top && targetInfo.bottom < rootBoundsInfo.bottom) {
            this.fire(false, stickyTarget)
          }
        }
      },
      {
        threshold: [0],
        root: null
      }
    )

    const sentinels = document.querySelectorAll('.sticky_sentinel--top')
    sentinels.forEach((el: Element) => observer.observe(el))
  }

  /**
   * Sets up an intersection observer to notify when elements with the class
   * `.sticky_sentinel--bottom` become visible/invisible at the botton of the
   * container.
   */
  private observeFooters(): void {
    const observer = new IntersectionObserver(
      (records: IntersectionObserverEntry[]): void => {
        for (const record of records) {
          if (!record.target.parentElement || !record.target.parentElement.querySelector('.sticky')) {
            throw new Error(`Cannot find HTML element with class sticky`)
          }

          const targetInfo = record.boundingClientRect
          const stickyTarget = record.target.parentElement.querySelector('.sticky')!
          const rootBoundsInfo = record.rootBounds
          const ratio = record.intersectionRatio

          if (targetInfo.bottom > rootBoundsInfo.top && ratio === 1) {
            this.fire(true, stickyTarget)
          }
          if (targetInfo.top < rootBoundsInfo.top && targetInfo.bottom < rootBoundsInfo.bottom) {
            this.fire(false, stickyTarget)
          }
        }
      },
      {
        // Get callback slightly before element is 100% visible/invisible.
        threshold: [1],
        root: null
      }
    )
    // Add the bottom sentinels to each section and attach an observer.
    const sentinels = document.querySelectorAll('.sticky_sentinel--bottom')
    sentinels.forEach((el: Element) => observer.observe(el))
  }

  /**
   * Dispatches a `sticky-event` custom event on the element.
   * @param {boolean} stuck
   * @param {!Element} target Target element of event.
   */
  private fire(stuck: boolean, target: Element): void {
    target.classList.toggle('shadow', stuck)
  }
}
