import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../Containers/Home'
import Login from '../Containers/Login'
import Register from '../Containers/Register'

import PrivateRoutes from './private-routes'
import Products from '../Containers/Products'

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoutes exact component={Home} path="/" />
        <PrivateRoutes component={Products} path="/produtos" />
      </Switch>
    </Router>
  )
}

export default Routes
