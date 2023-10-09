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
import Contact from './pages/Contact/Contact'
import Projects from './pages/Projects/Projects'
import ErrorElement from './components/Errorelement/ErrorElement'

const router = createBrowserRouter([
  {
    path:'/',
    element: <MainRoute></MainRoute>,
    errorElement: <ErrorElement></ErrorElement>,
    children:[
      {
        path: '/',
        element: <Home></Home>,
        errorElement: <ErrorElement></ErrorElement>,
        loader: ()=> fetch('/events.json')
      },
      {
        path: '/login',
        errorElement: <ErrorElement></ErrorElement>,
        element:<Login></Login>
      },
      {
        path: '/register',
        errorElement: <ErrorElement></ErrorElement>,
        element:<Register></Register>
      },
      {
        path: '/projects',
        errorElement: <ErrorElement></ErrorElement>,
        element: <PrivateRoute><Projects></Projects></PrivateRoute>,
        loader: ()=> fetch('/projects.json')
      },
      {
        path: '/contact',
        errorElement: <ErrorElement></ErrorElement>,
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path: '/eventdetails/:id',
        errorElement: <ErrorElement></ErrorElement>,
        element: <PrivateRoute><EventDetails></EventDetails></PrivateRoute>,
        loader: ()=> fetch('/events.json')
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
