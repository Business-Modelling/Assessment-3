import '../App.css'
import React from 'react'
import { Outlet } from "react-router-dom";
import NavigationBar from '../components/NavigationBar';

const Layout = () => {
  return (
    <>
      <NavigationBar />
      <div className='body'>
        <Outlet />
      </div>
    </>
  )
}

export default Layout
