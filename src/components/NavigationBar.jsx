import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";

const NavigationBar = () => {
  return (
    <div className='sticky top-0 left-0 w-full h-20 bg-primary flex align-middle items-center justify-between shadow-xl z-10'>
      <h1 className='font-extrabold ml-8 pr-4 text-3xl font-Montserrat text-white'><Link to="/">BusinessModelling</Link></h1>
      <ul className='flex flex-nowrap overflow-x-auto mr-8'>
        <li className='mx-4 font-bold font-Montserrat transition duration-500 ease-in-out transform hover:-translate-y-1 text-white'>
          <Link to="/AdminLogin">Admin</Link>
        </li>
        <li className='mx-4 font-bold font-Montserrat transition duration-500 ease-in-out transform hover:-translate-y-1 text-white'>
          <Link to="/CalculatorChange">Calculator</Link>
        </li>
      </ul>
    </div>
  )
}

export default NavigationBar
