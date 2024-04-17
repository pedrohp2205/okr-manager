import React from 'react'
import ReactDOM from 'react-dom/client'

// import {App} from './app.tsx'

import { Home } from './components/home.tsx'
import { Register } from './components/register.tsx'
import { Login } from './components/login.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom"


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
  }

])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
