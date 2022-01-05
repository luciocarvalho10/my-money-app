import React from "react"
import { Router, Route, IndexRoute, Redirect, hashHistory } from "react-router"

import AuthOrApp from './AuthOrApp'
import Dashboard from "../dashboard/Dashboard"
import BillingCycles from "../billingCycles/BillingCycles"

export default props => (
  <Router history={hashHistory}>
    <Route path='/' component={AuthOrApp} >
      <IndexRoute component={Dashboard} />
      <Route path='billingCycles' component={BillingCycles} />
    </Route>
    <Redirect from='*' to='/'/>
  </Router>
)