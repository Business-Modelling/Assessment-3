import React, {useEffect, useState} from 'react'
import Swal from 'sweetalert2';

const CalculatorChange = () => {
  const [basketValue, setBasketValue] = useState(0.0);
  const [amountValue, setAmountValue] = useState(0.0);
  const [changeValue, setChangeValue] = useState(0);
  const [coin50, setCoin50] = useState(0);
  const [coin20, setCoin20] = useState(0);
  const [coin10, setCoin10] = useState(0);
  const [coin5, setCoin5] = useState(0);
  const [coin1, setCoin1] = useState(0);

  useEffect(() => {
    document.title = 'Change calculator';
  }, []);


  useEffect(() => {
    calculation();
  }, [coin50, coin20, coin10, coin5, coin1]);

  const calculation = () => {
    setChangeValue(parseInt(amountValue * 100) - parseInt(basketValue * 100));
    var rest = changeValue;
    setCoin50(parseInt(rest / 50));
    rest = rest % 50;
    setCoin20(parseInt(rest / 20));
    rest = rest % 20;
    setCoin10(parseInt(rest / 10));
    rest = rest % 10;
    setCoin5(parseInt(rest / 5));
    rest = rest % 5;
    setCoin1(parseInt(rest / 1));
  }

  const clear = () => {
    setCoin1(0);
    setCoin5(0);
    setCoin10(0);
    setCoin20(0);
    setCoin50(0);
    setAmountValue("");
    setBasketValue("");
    setChangeValue(0.0);
  }

  return (
    <div>
    <div className='flex flex-col justify-center items-center content-center pt-72'>
      <div className="mb-6 w-96">
        <label className="block mb-2 text-sm font-medium text-gray-900">Basket Value</label>
        <input onChange={(e) => setBasketValue(e.target.value)} type="text" id="basket" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.0" value={basketValue}/>
      </div> 
      <div className="mb-6 w-96">
        <label className="block mb-2 text-sm font-medium text-gray-900">Amount Value</label>
        <input onChange={(e) => setAmountValue(e.target.value)} type="text" id="amount" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="0.0" value={amountValue}/>
      </div>
      <div className='flex space-x-12'>
      <button onClick={calculation} className="text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Calculate</button>
      <button onClick={clear} className=" text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Clear</button>
      </div>
    </div>
      <div className='flex justify-center items-center content-center pt-36'>
        <div className='flex space-x-6'>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Amount due: {changeValue / 100} €</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 50c = {coin50}</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 20c = {coin20}</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 10c = {coin10}</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 5c = {coin5}</p>
        <p className='text-white bg-primary font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'>Coin 1c = {coin1}</p>
        </div>
      </div>
    </div>
  )
}

export default CalculatorChange
