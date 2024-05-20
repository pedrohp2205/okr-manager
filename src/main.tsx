import React from 'react'
import ReactDOM from 'react-dom/client'

// import {App} from './app.tsx'

import { Home } from './pages/home.tsx'
import { Register } from './pages/register.tsx'
import { Login } from './pages/login.tsx'
import { Dashboard } from './pages/dashboard.tsx'
import { Management } from './pages/management.tsx'
import { Users } from './pages/users.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"
import { Toaster } from 'sonner'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>,
  },

  {
    path:"/register",
    element: <Register/>,
  },

  {
    path:"/login",
    element: <Login/>,
  },

  {
    path:"/dashboard",
    element: <Dashboard/>,
  },

  {
    path: "/management/:id",
    element: <Management/>,
  },
  {
    path: "/users",
    element: <Users/>,
  },

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    <Toaster richColors/>
  </React.StrictMode>,
)
