import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import Nav from './Components/Nav/Nav.jsx'
import Local from './Components/Local/Local.jsx'
import { SpeedInsights } from "@vercel/speed-insights/next"

const routes= createBrowserRouter([
  {path:'/', element:<Local/>,}
])

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={routes}/>
  </React.StrictMode>,
)
