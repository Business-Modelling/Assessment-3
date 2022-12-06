import React from 'react'

const BasketPrice = ({price}) => {
  return (
    <>
      <div className='flex justify-between my-2 mr-6'>
        <div className='text-md font-bold'>Total price:</div>
        <div>{price} €</div>
      </div>
    </>
  )
}

export default BasketPrice
