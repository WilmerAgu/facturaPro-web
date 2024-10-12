import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import './pages/Egresos.css'

import Login from './pages/auth/Login'
import Egresos from './pages/Egresos'
import Home from './pages/Home'
import './pages/Home.css'

let router = createBrowserRouter([
  {
    path: '/Home',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/Egresos',
    element: <Egresos />
  
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
