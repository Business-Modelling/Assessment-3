import React from 'react'

const CardMarket = ({name, price, date, vat, quantity,addItemToBasket}) => {
  return (
    <>
      <div className='grow mx-2 mb-4 max-w-lg w-1/4 h-1/5 rounded-lg border border-gray-300 shadow-xl'>
        <div className='flex flex-col p-3 space-y-5'>
          <div className='text-center font-bold font-Montserrat'>
            {name}
          </div>
          <div className='flex justify-between'>
            <div className='font-Montserrat'>
              Item Price:
            </div>
            <div>
              {price} €
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              Expiration Date:
            </div>
            <div>
            {date}
            </div>
          </div>
          <div className='flex justify-between'>
            <div>
              VAT: 
            </div>
            <div>
            {vat}
            </div>
          </div>
          <button className='w-fit px-3 py-2 self-center rounded-lg bg-secondary text-white font-medium leading-tight shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-midnight active:shadow-lg transition duration-150 ease-in-out'
            onClick={() => addItemToBasket(name, vat, price, quantity)}
          >
            Add to basket
          </button>
        </div>
      </div>
    </>
  )
}

export default CardMarket
