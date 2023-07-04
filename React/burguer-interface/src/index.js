import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Containers/Login'
import Register from './Containers/Register'
import GlobalStyles from './Styles/GlobalStyles'
import { ToastContainer } from 'react-toastify'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login /> <ToastContainer />
    <GlobalStyles/>
  </>
)
