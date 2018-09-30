import { PureComponent } from 'react'
import Layout from '../components/layout'

export default class HomePage extends PureComponent {
  public render(): JSX.Element {
    return (
      <Layout>
        <h1>Welcome!</h1>
        <p>Checkout the README file</p>
      </Layout>
    )
  }
}
