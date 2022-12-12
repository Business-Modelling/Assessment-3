import React, {useEffect, useState} from 'react'

const CalculatorChange = () => {
  const [basketList, setBasketList] = useState(() => {
    const saved = JSON.parse(localStorage.getItem("basketListStorage"))
    const initialValue = saved
    return initialValue || []
  })

  const [basketValue, setBasketValue] = useState(basketPrice(basketList));
  const [amountValue, setAmountValue] = useState();
  const [changeValue, setChangeValue] = useState(0);

  function basketPrice(itemBasket) {
    let price = 0
    itemBasket.map((item) => price += item.price)
    if (price === 0)
      return ""
    return price
  }

  useEffect(() => {
    document.title = 'Change calculator';
  }, []);

  const calculation = () => {
    setChangeValue(parseInt(amountValue * 100 - basketValue * 100));
  }

  function coinCal(coin) {
    var result = 0;

    if (changeValue > 0) {
      if (coin === 100)
        return changeValue / 100
      if (coin === 50)
        result = changeValue / coin;
      if(coin === 20)
        result = changeValue % 50 / coin;
      if (coin === 10)
        result = changeValue % 50 % 20 / coin;
      if (coin === 5)
        result = changeValue % 50 % 20 % 10 / coin;
      if(coin === 1)
        result = changeValue % 50 % 20 % 10 % 5;
    } else {
      result = 0
    }
    return parseInt(result);
  }

  const clear = () => {
    setAmountValue("");
    setBasketValue("");
    setChangeValue(0);
  }

  return (
    <div>
    <div className='flex flex-col justify-center items-center content-center pt-72'>
      <div className="mb-6 w-96">
        <label className="block mb-2 text-sm font-medium text-gray-900">Basket Value</label>
        <input onChange={(e) => setBasketValue(e.target.value)} type="number" id="basket" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.0" value={basketValue}/>
      </div> 
      <div className="mb-6 w-96">
        <label className="block mb-2 text-sm font-medium text-gray-900">Amount Value</label>
        <input onChange={(e) => setAmountValue(e.target.value)} type="number" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.0" value={amountValue}/>
      </div>
      <div className='flex space-x-12'>
      <button onClick={calculation} className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Calculate</button>
      <button onClick={clear} className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Clear</button>
      </div>
    </div>
      <div className='flex justify-center items-center content-center pt-36'>
        <div className='flex space-x-6'>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Amount due: {coinCal(100)} €</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 50c = {coinCal(50)}</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 20c = {coinCal(20)}</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 10c = {coinCal(10)}</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 5c = {coinCal(5)}</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 1c = {coinCal(1)}</p>
        </div>
      </div>
    </div>
  )
}

export default CalculatorChange
