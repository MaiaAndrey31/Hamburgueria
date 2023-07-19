import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../Containers/Home'
import Login from '../Containers/Login'
import Register from '../Containers/Register'

import PrivateRoutes from './private-routes'

function Routes() {

    return (

    <Router>
        <Switch>
            <PrivateRoutes exact component={Home} path="/"/>
            <Route component= {Login} path="/login" />
            <Route component= {Register} path="/cadastro" />
        </Switch>

    </Router>
    )
}

export default Routes
