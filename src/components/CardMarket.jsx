import React, {useEffect} from 'react'
import { useState } from 'react'

const CardMarket = ({name, price, date, vat, quantity,addItemToBasket}) => {
  const [value, setValue] = useState("")

  useEffect(() => {
    setValue(1)
  }, [name])

  return (
    <>
      <div className='grow mx-2 mb-4 max-w-lg w-1/4 h-full rounded-lg border border-gray-300 shadow-xl'>
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
          <div className='flex justify-between items-center'>
            <div>
              Quantity:
            </div>
            <input type="number"
                   value={value}
                   min={1}
                   max={quantity}
                   onChange={(e) => setValue(e.target.value > 0 ?e.target.value :value)}
                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[25%] p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <button className='w-fit px-3 py-2 self-center rounded-lg bg-secondary text-white font-medium leading-tight shadow-md hover:bg-primary hover:shadow-lg focus:bg-primary focus:shadow-lg focus:outline-none focus:ring-0 active:bg-midnight active:shadow-lg transition duration-150 ease-in-out'
            onClick={() => {addItemToBasket(name, vat, price, value)
            setValue(1)}}
          >
            Add to basket
          </button>
        </div>
      </div>
    </>
  )
}

export default CardMarket
