import React from 'react'

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Login from '../Containers/Login'
import Register from '../Containers/Register'

function Routes() {

    return (

    <Router>
        <Switch>

            <Route component= {Login} path="/login" />
            <Route component= {Register} path="/cadastro" />
        </Switch>

    </Router>
    )
}

export default Routes
