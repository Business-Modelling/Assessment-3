import React from 'react'

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

        <button className='w-fit px-3 py-2 self-center rounded-lg bg-secondary text-white font-medium leading-tight shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-midnight active:shadow-lg transition duration-150 ease-in-out'
            onClick={() => removeItemToBasket(idx)}
          >
            Remove from basket
          </button>
      </div>
    </>
  )
}

export default itemBasket
