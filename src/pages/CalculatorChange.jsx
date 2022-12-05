import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2';

const CalculatorChange = () => {
  const [basketValue, setBasketValue] = useState(0.0);
  const [amountValue, setAmountValue] = useState(0.0);
  const [changeValue, setChangeValue] = useState(0.0);


  useEffect(() => {
    document.title = 'Change calculator';
  }, []);

  const basketValueModification = (value) => {
    setBasketValue(parseFloat(value.target.value.replace(",", ".")))
  }

  const amountValueModification = (value) => {
    setAmountValue(parseFloat(value.target.value.replace(",", ".")))
  }

  const calculation = () => {
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: (basketValue + amountValue),
      showConfirmButton: false,
      timer: 2000
  })
  }

  return (
    <div className='flex flex-col justify-center items-center content-center pt-72'>
      <div className="mb-6 w-96">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Basket Value</label>
        <input onChange={basketValueModification} type="text" id="basket" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.0" />
      </div> 
      <div className="mb-6 w-96">
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount Value</label>
        <input onChange={amountValueModification} type="text" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.0" />
      </div>
      <button onClick={calculation} className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Calculate</button>
    </div>
  )
}

export default CalculatorChange
