import React from 'react'
import toast, { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Home from './pages/Home';
import MoviesPage from './pages/MoviesPage';
import Theater from './pages/Theater';
import BookTicket from './pages/BookTicket';
import SeatsLayout from './pages/SeatsLayout';
import ShowtimesPage from './pages/ShowtimesPage';
import demo from './pages/demo'
import { Checkout } from './pages/Checkout';
import FeatureDetailsPage from './pages/FeatureDetailsPage';
import ContactPage from './pages/ContactPage';
import TheatersPage from './pages/TheatersPage';

const App = () => {
  const route = createBrowserRouter([
    {
      path: '/',
      Component: MainLayout,
      children: [
        { index: true, Component: Home },
        {path: '/movies', Component: MoviesPage},
        {path: '/details/:name', Component: ShowtimesPage},
        {path: '/theaters', Component: TheatersPage},
        {path: '/theater/:name', Component: Theater},
        {path: '/:name/ticket', Component: BookTicket},
        {path: '/seats/:name', Component: SeatsLayout},
        {path: '/demo', Component: demo},
        {path: '/checkout', Component: Checkout},
        {path: '/:name/showtimes', Component: ShowtimesPage},
        {path: '/:name/:name/:id', Component: FeatureDetailsPage},
        {path: 'contact', Component: ContactPage},
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