import React, { useEffect } from 'react'
import Navbar from './Navbar/Navbar'
import Footer from './Footer'
import { matchPath, Outlet, useLocation } from 'react-router-dom'


const MainLayout = () => {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location]);
  
  const isSeatPage = matchPath('/seats/:name', location.pathname);
  return (
    <div>
      <Navbar isSeatPage={isSeatPage} />
      <Outlet />
      {
        !isSeatPage && <Footer />
      }
    </div>
  )
}

export default MainLayout