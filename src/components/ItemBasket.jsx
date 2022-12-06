import React from 'react'

const itemBasket = ({name, quantity, price}) => {
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
          (VAT included)
        </div>
      </div>
    </>
  )
}

export default itemBasket
