import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { HomeScreen } from './pages/home';
import './components/CSS/general.scss'

const router = createBrowserRouter([
  {
    path : "/",
    element : <HomeScreen/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
