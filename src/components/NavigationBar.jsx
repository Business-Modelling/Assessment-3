import React from 'react'
import "../App.css";

const NavigationBar = () => {
  return (
    <div className='sticky top-0 left-0 w-full h-20 bg-primary flex align-middle items-center justify-between text-white'>
      <h1 className='font-extrabold ml-8 pr-4 text-3xl font-Montserrat '><a href="/">BusinessModelling</a></h1>
      <ul className='flex flex-nowrap overflow-x-auto mr-8'>
        <li className='mx-4 font-bold font-Montserrat transition duration-500 ease-in-out transform hover:-translate-y-1'>
          <a href="/AdminLogin">Admin</a>
        </li>
        <li className='mx-4 font-bold font-Montserrat transition duration-500 ease-in-out transform hover:-translate-y-1'>
          <a href="/CalculatorChange">Calculator</a>
        </li>
      </ul>
    </div>
  )
}

export default NavigationBar
