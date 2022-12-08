import React from 'react'
import Divider from './Divider'

const itemBasket = ({idx, name, vat, quantity, price, removeItemToBasket}) => {
  return (
    <>
      <div className='h-24 flex flex-col mr-2'>
        <div className='flex justify-between my-2'>
          <div className='text-md font-bold'>{name}</div>
          <div>x{quantity}</div>
        </div>
        <div className='self-end'>
          {price} €
        </div>
        <div className='self-end text-xs italic'>
          (VAT included: {vat})
        </div>
      </div>
      <div className='self-center border-b border-gray-300 w-58 my-2' />
    </>
  )
}

export default itemBasket
