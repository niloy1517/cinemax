import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';
import LoginPage from './pages/LoginPage'
import Mainlayout from './Mainlayout/Mainlayout';
import DashboardHomePage from './pages/DashboardHomePage';
import demo from './pages/demo';
import ManageAdmins from './pages/ManageAdmins';
import TMDBMoviesPage from './pages/TMDBMoviesPage';

const App = () => {
  const route = createBrowserRouter([
    {
      path: '/',
      Component: LoginPage,
    },
    {
      path: '/dashboard',
      Component: Mainlayout,
      children: [
        {index: true, Component: DashboardHomePage},
        {path: 'demo', Component: demo},
        {path: 'manange/admin', Component: ManageAdmins},
        {path: 'tmdb/movies', Component: TMDBMoviesPage}
       
      ]
    }
  ])
  return (
    <div>
      <Toaster />
      <RouterProvider router={route} />
    </div>
  )
}

export default App