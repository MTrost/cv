import classNames from 'classnames'
import { PureComponent, ReactNode } from 'react'
import styles from './styles.css'
import { IStripeProps } from './types'

export enum Stripes {
  Top,
  Bottom
}

export default class Stripe extends PureComponent<IStripeProps> {
  public render(): ReactNode {
    const { position } = this.props

    return (
      <div
        className={classNames(styles.stripe, {
          [styles.stripeTop]: position === Stripes.Top,
          [styles.stripeBottom]: position === Stripes.Bottom
        })}
      />
    )
  }
}
