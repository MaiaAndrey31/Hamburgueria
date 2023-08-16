import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import {Home, Login, Products, Register, Cart, Admin} from '../Containers'


import PrivateRoutes from './private-routes'


function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoutes exact component={Home} path="/" />
        <PrivateRoutes component={Products} path="/produtos" />
        <PrivateRoutes component={Cart} path="/carrinho" />
        
        <PrivateRoutes component={Admin} path="/pedidos" isAdmin />

      </Switch>
    </Router>
  )
}

export default Routes
