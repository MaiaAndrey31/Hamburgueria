import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Containers/Login'
import GlobalStyles from './Styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login />
    <GlobalStyles/>
  </>
)
