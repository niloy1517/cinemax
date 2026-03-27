import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom';

const Mainlayout = () => {
  const [isShowLabel, setIsShowLabel] = useState(false);
  return (
    <div>
      <Navbar isShowLabel={isShowLabel} setIsShowLabel={setIsShowLabel} />
      <div className='flex'>
        <Sidebar isShowLabel={isShowLabel} />
        <Outlet />
      </div>
    </div>
  )
}

export default Mainlayout