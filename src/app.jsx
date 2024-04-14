import { lazy } from 'react'
import { Switch, Route } from 'wouter'
import Layout from '~/components/layout'

const LandingPage = lazy(() => import('~/pages/landing'))

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={LandingPage} />
      </Switch>
    </Layout>
  )
}
