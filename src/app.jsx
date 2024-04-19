import { lazy } from 'react'
import { Switch, Route } from 'wouter'
import Layout from '~/components/layout'

const HomePage = lazy(() => import('~/pages/index'))
const CallbackPage = lazy(() => import('~/pages/callback'))

export default function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/callback" component={CallbackPage} />
      </Switch>
    </Layout>
  )
}
