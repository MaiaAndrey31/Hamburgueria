import React from 'react'
import ReactDOM from 'react-dom/client'
import Login from './Containers/Login'
import Register from './Containers/Register'
import GlobalStyles from './Styles/GlobalStyles'
import { ToastContainer } from 'react-toastify'
import { UserProvider } from './hooks/UserContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
  <UserProvider>
    <Login />
    </UserProvider>
     <ToastContainer />
    <GlobalStyles/>
  </>
)
