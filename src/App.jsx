import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Login from './components/Login'
import Signup from './components/Signup'
import Doctor from './components/Doctor'
import Home from './components/Home'
import Dataentry from './components/Dataentry'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'


function App() {
  

  const router=createBrowserRouter([
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/doctor',
      element:<Doctor/>
    },
    {
      path:'/nurse',
      element:<Dataentry/>
    },
    {
      path:'/',
      element:<Home/>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
