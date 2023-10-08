import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AuthProvider from './authProvider/AuthProvider.jsx'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/Register/Register'
import MainRoute from './MainRoute'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import EventDetails from './pages/eventDetails/EventDetails'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainRoute></MainRoute>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('../public/events.json')
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      },
      {
        path: '/eventdetails/:id',
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: ()=> fetch('../public/events.json')
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
