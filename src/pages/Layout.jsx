import React from 'react'
import { Outlet } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <div className='m-4'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
